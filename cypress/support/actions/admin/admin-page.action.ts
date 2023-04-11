import { AdminPage } from '../../../pages/admin/admin.page';

export class AdminActions extends AdminPage {
    constructor() {
        super();
    }

    getMainPage() {
        cy.get(this.mainPageSelector).should('be.visible');
    }

}
