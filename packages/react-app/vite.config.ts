import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

const reactPlugin = react();

const routerPlugin = tanstackRouter({
  target: "react",
  autoCodeSplitting: true,
  routesDirectory: "./src/pages",
  generatedRouteTree: "./src/router/routeTree.gen.tsx",
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [routerPlugin, reactPlugin],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
