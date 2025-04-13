import { defineConfig } from "vite";
import { NodePackageImporter } from "sass";

export default defineConfig({
   css: {
      preprocessorOptions: {
         scss: {
            api: "modern-compiler",
            importers: [new NodePackageImporter()],
         },
      },
   },
});
