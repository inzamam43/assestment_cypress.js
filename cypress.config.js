const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      baseUrl: "https://react-qa-test.netlify.app",
      email: "test_account_1@yopmail.com",
      password: "Qwerty1@"
    }
  },
});