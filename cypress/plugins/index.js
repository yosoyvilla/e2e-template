/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const browserify = require('@cypress/browserify-preprocessor');
const cucumber = require('cypress-cucumber-preprocessor').default;
const resolve = require('resolve');
const fs = require("fs-extra");
const path = require("path");

const fetchConfigurationByFile = async file => {
  const pathOfConfigurationFile = `config/config-${file}.json`;

  return (
    file && await fs.readJson(path.join(__dirname, "../", pathOfConfigurationFile))
  );
};
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = async (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  const options = {
    ...browserify.defaultOptions,
    typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),
  };

  on('file:preprocessor', cucumber(options));

  const environment = config.env.NODE_ENV || "develop";
  const configurationForEnvironment = await fetchConfigurationByFile(environment);
  const env = { ...configurationForEnvironment };
  const result = { ...config, env };

  return result;
};
