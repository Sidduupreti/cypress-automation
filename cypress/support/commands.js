// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import {selectors} from './selectors';
Cypress.Commands.add('login', (username, password) => {
    cy.xpath(selectors.enter_store).click();
    cy.xpath("/html/body/div[1]/div[2]/div/a[2]").click()
    cy.get('[name="username"]').type(username);
    cy.get('[name="password"]').clear().type(password);
    cy.get('[name="signon"]').click();

});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })