import { defineConfig } from "vite";
import path from "path";


export default defineConfig({

  build: {

    outDir: "dist",

    lib: {

      entry:
        path.resolve(
          __dirname,
          "src/main.ts"
        ),

      name:
        "CRMWidget",

      fileName:
        "widget"

    },

    rollupOptions: {

      output: {

        format:
          "iife"

      }

    }

  }

});