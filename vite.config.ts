import { defineConfig } from "vite";
import path from "path";


export default defineConfig({

  build: {

    outDir: "dist",

    emptyOutDir: true,


    lib: {

      entry:
        path.resolve(
          __dirname,
          "src/index.ts"
        ),


      name:
        "CRMWidget",


      fileName:
        () => "widget.js"

    },


    rollupOptions: {

      output: {

        format:
          "iife"

      }

    }

  }

});