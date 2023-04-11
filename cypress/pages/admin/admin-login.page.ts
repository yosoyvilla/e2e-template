import { BasePage } from '../base.page';

export class AdminLoginPage extends BasePage {
    public url: string;
    protected usernameFieldSelector = '#id_username';
    protected passwordFieldSelector = '#id_password';
    protected loginButtonSelector = '.submit-row input';

    constructor() {
        super();
        this.url = Cypress.env('baseUrl');
    }

    public getUsernameFieldSelector() {
        return this.usernameFieldSelector;
    }

    public getPasswordFieldSelector() {
        return this.passwordFieldSelector;
    }

    public getLoginButtonSelector() {
        return this.loginButtonSelector;
    }

}
