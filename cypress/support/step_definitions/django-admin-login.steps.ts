/// <reference types="cypress" />
import { Given } from 'cypress-cucumber-preprocessor/steps';
import { AdminLoginActions } from '../actions/admin/admin-login.action';
import { AdminLoginPage } from '../../pages/admin/admin-login.page';

Given(/^I Log to the django admin page$/, () => {
  const adminLoginActions = new AdminLoginActions();
  const adminLoginPage = new AdminLoginPage();

  cy.visit(adminLoginPage.url);
  adminLoginActions.login();
}
);
