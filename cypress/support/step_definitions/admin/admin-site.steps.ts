/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { AdminActions } from '../../actions/admin/admin-page.action';

Then(/^the user should be in the site administration page$/, () => {
    const adminActions = new AdminActions();
    adminActions.getMainPage();
});
