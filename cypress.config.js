const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const dotenv = require("dotenv");
dotenv.config();

const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
     env: {
      GITHUB_TOKEN: process.env.GITHUB_TOKEN,
      GITHUB_USER: process.env.GITHUB_USER,
    },
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      // configurndo o bundling com esbuild + plugin cucumber
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },

    specPattern: ["cypress/e2e/features/**/*.feature", "cypress/e2e/api/**/*.cy.js"],
    baseUrl: "https://nexdom.tec.br",
    viewportWidth: 1366,
    viewportHeight: 768,
    chromeWebSecurity: false,
  },
});
