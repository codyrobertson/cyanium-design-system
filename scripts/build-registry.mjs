#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const uiDir = path.join(root, "packages/ui/src/components/ui");

const NPM_DEPS = new Set([
  "class-variance-authority",
  "clsx",
  "tailwind-merge",
  "lucide-react",
]);

const RADIX_PREFIX = "@radix-ui/";

function titleCase(name) {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function parseImports(source) {
  const registry = new Set();
  const npm = new Set();
  for (const match of source.matchAll(/from\s+["']([^"']+)["']/g)) {
    const spec = match[1];
    if (spec.startsWith("./")) {
      registry.add(spec.replace(/^\.\//, "").replace(/\.tsx?$/, ""));
    } else if (spec.startsWith(RADIX_PREFIX) || NPM_DEPS.has(spec)) {
      npm.add(spec);
    }
  }
  if (source.includes('from "../../lib/utils"') || source.includes('from "../lib/utils"')) {
    registry.add("utils");
  }
  if (source.includes('from "../../lib/surface"') || source.includes('from "../lib/surface"')) {
    registry.add("surface");
  }
  return { registry: [...registry].sort(), npm: [...npm].sort() };
}

function buildLibItem(name, filePath, dependencies) {
  return {
    name,
    type: "registry:lib",
    title: titleCase(name),
    files: [{ path: filePath.replace(`${root}/`, ""), type: "registry:lib" }],
    registryDependencies: [],
    dependencies,
  };
}

const items = [];
const seen = new Set();

for (const file of fs.readdirSync(uiDir).filter((f) => f.endsWith(".tsx") && !f.includes(".test.")).sort()) {
  const name = file.replace(/\.tsx$/, "");
  if (name === "index") continue;
  seen.add(name);
  const fullPath = path.join(uiDir, file);
  const source = fs.readFileSync(fullPath, "utf8");
  const { registry, npm } = parseImports(source);
  items.push({
    name,
    type: "registry:ui",
    title: titleCase(name),
    files: [{ path: `packages/ui/src/components/ui/${file}`, type: "registry:ui" }],
    registryDependencies: registry.filter((dep) => dep !== name),
    dependencies: npm,
  });
}

items.unshift(buildLibItem("utils", path.join(root, "packages/ui/src/lib/utils.ts"), ["clsx", "tailwind-merge"]));
items.unshift(buildLibItem("surface", path.join(root, "packages/ui/src/lib/surface.ts"), ["class-variance-authority", "clsx", "tailwind-merge"]));
items.unshift({
  name: "styles",
  type: "registry:file",
  title: "Styles",
  files: [{ path: "packages/ui/src/styles.css", type: "registry:file" }],
  registryDependencies: [],
  dependencies: [],
});
items.unshift({
  name: "use-toast",
  type: "registry:hook",
  title: "Use Toast",
  files: [{ path: "packages/ui/src/hooks/use-toast.tsx", type: "registry:hook" }],
  registryDependencies: ["utils", "surface"],
  dependencies: ["@radix-ui/react-toast", "lucide-react"],
});

const registry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "cyanium",
  homepage: "https://github.com/cyanium/design-system",
  items: items.sort((a, b) => a.name.localeCompare(b.name)),
};

fs.writeFileSync(path.join(root, "registry/cyanium.json"), `${JSON.stringify(registry, null, 2)}\n`);
console.log(`Wrote ${registry.items.length} registry items`);
