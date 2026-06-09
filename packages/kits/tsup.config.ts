import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "finance/index": "src/finance/index.ts",
    "landing/index": "src/landing/index.tsx",
    "ai/index": "src/ai/index.ts",
    "patterns/index": "src/patterns/index.ts",
    "fixtures/index": "src/fixtures/index.ts",
  },
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "@cyanium/ui", "lucide-react"],
  treeshake: true,
});
