import { AdminLoginPage } from '../../../pages/admin/admin-login.page';
import clientData from '../../../fixtures/admin/user-data.json';

export class AdminLoginActions extends AdminLoginPage {
    constructor() {
        super();
    }

    login() {
        const env = Cypress.env('NODE_ENV') || 'develop';
        const username = clientData[env].username;
        const password = clientData[env].password;
        cy.get(this.usernameFieldSelector).type(username);
        cy.get(this.passwordFieldSelector).type(password);
        cy.get(this.loginButtonSelector).click();
    }

}
