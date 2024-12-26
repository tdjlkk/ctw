import { defineConfig } from "rolldown";

import IsolatedDecl from "unplugin-isolated-decl/rolldown";

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    file: "index.js",
    format: "esm",
    sourcemap: true,
    minify: true,
  },
  plugins: [
    IsolatedDecl({
      transformer: "oxc",
      include: ["src/**/*.ts"],
      exclude: ["src/**/*.test.ts"],
    }),
  ],
});
