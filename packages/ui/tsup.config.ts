import { readdirSync } from "node:fs";
import { join } from "node:path";
import { defineConfig } from "tsup";

const uiDir = join("src/components/ui");
const uiEntries = readdirSync(uiDir)
  .filter((f) => f.endsWith(".tsx") && !f.includes(".test."))
  .map((f) => join(uiDir, f));

export default defineConfig({
  entry: ["src/index.ts", "src/lib/utils.ts", "src/lib/surface.ts", "src/hooks/use-toast.tsx", ...uiEntries],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  treeshake: true,
});
