// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });


const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const options = {
        webpackOptions: require("./webpack.config"),
        watchOptions: {},
      };

      on("file:preprocessor", webpack(options));
      on("file:preprocessor", cucumber());
    },
    baseUrl: "http://localhost:8080/",
    failOnStatusCode: false,
    specPattern: [
      "cypress/e2e/pages/**/*.feature",
      "cypress/e2e/tests/**/*.cy.{js,jsx,ts,tsx}",
    ],
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    defaultCommandTimeout: 20000
  },
});
