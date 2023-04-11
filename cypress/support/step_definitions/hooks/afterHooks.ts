import { After } from 'cypress-cucumber-preprocessor/steps';

afterEach(() => {
  // runs after each test block
  cy.log('AFTER EACH TEST');
});
