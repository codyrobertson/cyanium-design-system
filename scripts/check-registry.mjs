#!/usr/bin/env node
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const registryPath = path.join(root, "registry/cyanium.json");
const before = fs.readFileSync(registryPath, "utf8");

execSync("node scripts/build-registry.mjs", { cwd: root, stdio: "inherit" });

const after = fs.readFileSync(registryPath, "utf8");
if (before !== after) {
  console.error("registry/cyanium.json is out of date — run pnpm build:registry and commit the result");
  process.exit(1);
}

console.log("registry/cyanium.json is up to date");
