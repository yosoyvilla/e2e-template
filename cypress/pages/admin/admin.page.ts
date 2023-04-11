import { BasePage } from '../base.page';

export class AdminPage extends BasePage {
    public url: string;
    protected headerSelector = '#header';
    protected mainPageSelector = '#content-main';
    protected env = Cypress.env('NODE_ENV') || 'develop';

    constructor() {
        super();
        this.url = '/admin';
    }

    public getHeaderLocator() {
        return this.headerSelector;
    }

    public getMainPageLocator() {
        return this.mainPageSelector;
    }

}
