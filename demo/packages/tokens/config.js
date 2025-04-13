import { formats, transformGroups } from "style-dictionary/enums";

const { cssVariables } = formats;

function generateComponentFiles(components) {
  return components.map((comp) => ({
    destination: `css/components/${comp}.css`,
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
          destination: "css/colors.css",
          format: cssVariables,
          filter: (token) => token.path[0] === "color",
        },
        {
          destination: "css/spacings.css",
          format: cssVariables,
          filter: (token) => token.path[0] === "spacing",
        },
        ...generateComponentFiles(["button", "select", "switch"]),
      ],
    },
  },
};
