import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given('Un usuario ingresa a la página de inicio de sesion', ()=> {
    cy.visit('/')
})

When('Un usuario ingresa el nombre de usuario {string}', (username)=>{
    cy.get('#ember7').clear().type(username);
})

And('Un usuario ingresa la contraseña {string}', (password)=>{
    cy.get('#ember9').clear().type(password);
})

And('Un usuario hace click en el boton de inicio de sesion', ()=>{
    cy.get('#ember11').click();
})

Then('Un usuario iniciara sesion', ()=>{
    cy.url().should('contains', '/#/dashboard');
})