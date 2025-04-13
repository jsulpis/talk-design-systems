import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'ds-web-components',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-vscode',
      file: 'vscode-data.json',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        {
          src: '../node_modules/@ds/tokens/css/theme.css',
          dest: '@ds/tokens/css/theme.css',
        },
        {
          src: '../node_modules/@ds/css/dist/base.css',
          dest: '@ds/css/dist/base.css',
        },
      ],
    },
  ],
  extras: {
    enableImportInjection: true,
  },
  testing: {
    browserHeadless: 'shell',
  },
};
