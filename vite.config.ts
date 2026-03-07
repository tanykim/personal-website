import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { Plugin } from "vite";

function rawMarkdownPlugin(): Plugin {
  return {
    name: "raw-markdown",
    transform(code, id) {
      if (id.endsWith(".md")) {
        return `export default ${JSON.stringify(code)}`;
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), rawMarkdownPlugin()],
});
