import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const loginPage = require('../../pages/loginPage')

Given('Un usuario ingresa a la página de inicio de sesion', ()=> {
    cy.visit('/')
})

When('Un usuario ingresa el nombre de usuario {string}', (username)=>{
    loginPage.typeUser()
})

And('Un usuario ingresa la contraseña {string}', (password)=>{
    loginPage.typePassword()
})

And('Un usuario hace click en el boton de inicio de sesion', ()=>{
    loginPage.clickLogin()
})

Then('Un usuario iniciara sesion', ()=>{
    loginPage.checkPage()
})