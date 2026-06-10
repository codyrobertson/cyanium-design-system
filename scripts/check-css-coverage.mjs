#!/usr/bin/env node
/**
 * CI guard: verifies the example app production build includes Tailwind utilities
 * that kits and UI depend on (regression catch for missing @source scans).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

/** Utilities that were missing when kit dist was not scanned */
const CANARIES = [
  "text-icon-soft",
  "shadow-button",
  "hover:bg-bg-weak",
  "duration-normal",
  "duration-slow",
  "ease-default",
  "placeholder:text-text-soft",
  "font-display",
  "size-9",
  "bg-bg-weak",
  "text-text-soft",
  "text-text-strong",
  "border-stroke-soft",
  "shadow-focus-primary",
];

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Match Tailwind v4 minified selectors (incl. variant prefixes like .hover\:bg-bg-weak:hover) */
function utilityPresent(cssText, utility) {
  const escaped = utility
    .split(":")
    .map((part) => escapeRegex(part))
    .join("\\:");
  const selectorPattern = new RegExp(`\\.${escaped}(?:\\\\|,|:|\\{|\\[|>|\\s|$)`);
  if (selectorPattern.test(cssText)) return true;
  // Fallback: token appears in generated rules (e.g. focus-visible\:shadow-focus-primary)
  return cssText.includes(escaped);
}

function findBuiltCss() {
  const assetsDir = path.join(root, "apps/example/dist/assets");
  if (!fs.existsSync(assetsDir)) {
    console.error("No built CSS found — run pnpm build (or pnpm example:build) first");
    console.error(`Expected: ${assetsDir}/*.css`);
    process.exit(1);
  }
  const files = fs
    .readdirSync(assetsDir)
    .filter((f) => f.endsWith(".css"))
    .map((f) => path.join(assetsDir, f));
  if (files.length === 0) {
    console.error("No .css files in apps/example/dist/assets");
    process.exit(1);
  }
  return files;
}

function walkDir(dir, ext, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkDir(full, ext, out);
    else if (entry.name.endsWith(ext)) out.push(full);
  }
  return out;
}

/** Extract likely Tailwind class tokens from source (heuristic) */
function extractClassesFromSource(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const classes = new Set();
  const classAttr = /className\s*=\s*(?:cn\(|{cn\(|[{"'`])/g;
  const strings = text.match(/["'`][^"'`]*["'`]/g) ?? [];
  for (const raw of strings) {
    const s = raw.slice(1, -1);
    if (!s.includes(" ") && s.length > 80) continue;
    for (const token of s.split(/\s+/)) {
      if (!token || token.startsWith("${") || token.includes("(")) continue;
      if (/^[a-z@][\w\-:/\[\].%]*$/i.test(token)) classes.add(token);
    }
  }
  return classes;
}

function scanSourceForMissing(cssText, scanDirs) {
  const reported = new Set();
  const missing = [];

  for (const dir of scanDirs) {
    const abs = path.join(root, dir);
    for (const file of walkDir(abs, ".tsx").concat(walkDir(abs, ".ts"))) {
      if (file.endsWith(".test.tsx") || file.endsWith(".test.ts")) continue;
      for (const cls of extractClassesFromSource(file)) {
        if (reported.has(cls)) continue;
        reported.add(cls);
        if (!utilityPresent(cssText, cls)) {
          missing.push({ cls, file: path.relative(root, file) });
        }
      }
    }
  }
  return missing;
}

function main() {
  const cssFiles = findBuiltCss();
  const cssText = cssFiles.map((f) => fs.readFileSync(f, "utf8")).join("\n");

  const missingCanaries = CANARIES.filter((u) => !utilityPresent(cssText, u));

  if (missingCanaries.length > 0) {
    console.error("Missing canary utilities in built CSS:");
    for (const u of missingCanaries) console.error(`  - ${u}`);
    console.error(`\nScanned: ${cssFiles.map((f) => path.relative(root, f)).join(", ")}`);
    process.exit(1);
  }

  console.log(`Canary utilities present (${CANARIES.length}) in ${cssFiles.length} CSS file(s)`);

  const scanDirs = ["packages/kits/src", "packages/ui/src"];
  const sourceMissing = scanSourceForMissing(cssText, scanDirs);
  const significant = sourceMissing.filter(
    ({ cls }) =>
      !cls.startsWith("data-") &&
      !cls.startsWith("sr-only") &&
      !cls.startsWith("group") &&
      !cls.startsWith("peer") &&
      !cls.includes("[") &&
      cls !== "cn",
  );

  if (significant.length > 0) {
    console.warn("\nOptional source scan — utilities used in kits/ui but not found in built CSS:");
    for (const { cls, file } of significant.slice(0, 20)) {
      console.warn(`  - ${cls} (${file})`);
    }
    if (significant.length > 20) {
      console.warn(`  … and ${significant.length - 20} more`);
    }
    console.warn("\n(Informational only — canaries gate CI; fix @source if these look wrong.)");
  }

  console.log("CSS coverage check passed");
}

main();
