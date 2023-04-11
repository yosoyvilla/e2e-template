declare namespace Cypress {
  // tslint:disable-next-line:interface-name  
  interface Chainable<Subject> {
    /**
     * Login using API and bearer token
     * @example
     * cy.login()
     */
    login(): Chainable<any>;
  }
}
