import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacyPlugin from "@vitejs/plugin-legacy"

export default () => {
  return defineConfig({
    plugins: [
        react(),
        legacyPlugin({
            targets: ["ie >= 11"],
            additionalLegacyPolyfills:['regenerator-runtime/runtime'],
        }),
    ]
  })
}