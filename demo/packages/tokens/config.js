import { formats, transformGroups } from "style-dictionary/enums";

const { cssVariables } = formats;

const outputFolder = "css";

function generateComponentFiles(components) {
   return components.map((comp) => ({
      destination: `${outputFolder}/components/${comp}.css`,
      format: cssVariables,
      options: {
         outputReferences: true,
      },
      filter: (token) => token.path[0] === comp,
   }));
}

export default {
   source: ["tokens/*.json"],
   platforms: {
      css: {
         prefix: "ds",
         transformGroup: transformGroups.css,
         files: [
            {
               destination: `${outputFolder}/theme.css`,
               format: cssVariables,
               filter: (token) => token.filePath.endsWith("globals.json"),
            },
            ...generateComponentFiles(["button", "input"]),
         ],
      },
   },
};
