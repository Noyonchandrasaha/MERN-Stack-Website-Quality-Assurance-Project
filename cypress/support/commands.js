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
// Cypress.Commands.add('login', (email, password) => { ... })
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

Cypress.Commands.add('adminLogIn', (email,pass,rememberMe = false)=>{
    cy.visit("http://localhost:3000/admin")
    cy.get("input[id='adminemail']").type(email)
    cy.get("input[id='adminpassword']").type(pass)
    if (rememberMe) {
        cy.get("input[class='PrivateSwitchBase-input css-j8yymo']").check()
    }
    cy.get("button[class='MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedSuccess MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorSuccess MuiButton-fullWidth MuiButton-root MuiButton-outlined MuiButton-outlinedSuccess MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorSuccess MuiButton-fullWidth css-suxgn8-MuiButtonBase-root-MuiButton-root']").click()
})