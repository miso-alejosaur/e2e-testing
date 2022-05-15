import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const loginPage = require('../../pages/loginPage')
const newPost = require('../../pages/newPost')
const checkPost = require('../../pages/checkPost')
const baseUrl = Cypress.config("baseUrl")
const versionghost = Cypress.config("versionghost")

//Inicio de sesión
Given('Ingresa a la pagina de inicio de sesion', ()=> {
    cy.visit('/ghost/')
    cy.screenshot(`01-${versionghost}-CrearPost`)
})

    When('Ingresa el nombre de usuario {string} e ingresa la contraseña {string}', (username,password)=>{
        loginPage.singIn()
        cy.screenshot(`02-${versionghost}-CrearPost`)
    })

Then('Iniciar Sesion Exitoso', ()=>{
    loginPage.checkPage()
    cy.screenshot(`03-${versionghost}-CrearPost`)
})

//Crear post
    When('Hace click en el boton de new post', ()=>{
        newPost.newPostButton()
        cy.screenshot(`04-${versionghost}-CrearPost`)
    })

        And('Ingresa el titulo del post {string}', (namepost)=>{
            newPost.nameInput(namepost)
            cy.screenshot(`05-${versionghost}-CrearPost`)
        })

        And('Ingresa la descripcion del post {string}', (textpost)=>{
            newPost.textInput(textpost)
            cy.screenshot(`06-${versionghost}-CrearPost`)
        })

        And('Hace click en el boton de create post', ()=>{
            newPost.createPostButton()
            cy.screenshot(`07-${versionghost}-CrearPost`)
        })

        And('Hace click en el boton de publish post', ()=>{
            newPost.publishPostButton()
            cy.screenshot(`08-${versionghost}-CrearPost`)
        })

        /*And('Hace click en el boton de confirm post', ()=>{
            newPost.confirmPostButton()
            cy.screenshot(`09-${versionghost}-CrearPost`)
        })*/

    Then('Validar el mensaje de confirmacion', ()=>{
        newPost.checkMessage()
        cy.screenshot(`09-${versionghost}-CrearPost`)
    })

//Verificar un nuevo post
    Given('Ingresar al sitio', ()=>{
        cy.visit(baseUrl)
    })

    When('Hace click al post New-Post', ()=>{
        checkPost.postUrl()
        cy.screenshot(`11-${versionghost}-CrearPost`)
    })

    Then('Validar la url del New-Post', ()=>{
        checkPost.checkUrl()
    })

    Then('Validar titulo del post New-Post', ()=>{
        checkPost.labelTitle()

    })

//Eliminar el nuevo post
    Given('Ingresar al sitio posts', ()=>{
        cy.wait(500)
        cy.visit('/'+'#/posts')
    })

    When('Hacer en la lista de post', ()=>{
        newPost.labelPost()
    })

    And('Hacer click en menu del post', ()=>{
        newPost.menuPost()
    })

    And('Hace click en el boton delete', ()=>{
        newPost.deleteButton()
    })

    And('Hace click en el boton confirmar delete', ()=>{
        newPost.confirmDeleteButton()
    })
    
    Then('Validar la url posts', ()=>{
        newPost.checkUrl()
    })