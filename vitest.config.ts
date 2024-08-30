import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
   plugins: [react()],
   test: {
      environment: "jsdom",
      include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
      exclude: ["node_modules/**"],
      reporters: ["html"],
      // coverage: {
      //    all: true,
      //    provider: "v8",
      //    reporter: ["lcov", "text-summary"],
      // },
      setupFiles: ["src/setup.ts"],
      poolOptions: {
         threads: {
            singleThread: true,
         },
      },
   },
   resolve: {
      alias: {
         "@": "/src",
      },
   },
});
