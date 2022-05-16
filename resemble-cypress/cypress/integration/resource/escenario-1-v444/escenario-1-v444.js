import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const loginPage = require('../../pages/loginPage')
const newPost = require('../../pages/newPost')
const checkPost = require('../../pages/checkPost')
const baseUrl = Cypress.config("baseUrl")
const versionghost = Cypress.config("versionghost")

//Inicio de sesión
Given('Ingresa a la pagina de inicio de sesion', ()=> {
    cy.visit('/ghost/')
    cy.screenshot(`escenario-1_${versionghost}_1`)
})

    When('Ingresa el nombre de usuario {string} e ingresa la contraseña {string}', (username,password)=>{
        loginPage.singIn()
        cy.screenshot(`escenario-1_${versionghost}_2`)
    })

Then('Iniciar Sesion Exitoso', ()=>{
    loginPage.checkPage2()
    cy.screenshot(`escenario-1_${versionghost}_3`)
})

//Crear post
    When('Hace click en el boton de new post', ()=>{
        newPost.newPostButton()
        cy.screenshot(`escenario-1_${versionghost}_4`)
    })

        And('Ingresa el titulo del post {string}', (namepost)=>{
            newPost.nameInput2(namepost)
            cy.screenshot(`escenario-1_${versionghost}_5`)
        })

        And('Ingresa la descripcion del post {string}', (textpost)=>{
            newPost.textInput(textpost)
            cy.screenshot(`escenario-1_${versionghost}_6`)
        })

        And('Hace click en el boton de create post', ()=>{
            newPost.createPostButton()
            cy.screenshot(`escenario-1_${versionghost}_7`)
        })

        And('Hace click en el boton de publish post', ()=>{
            newPost.publishPostButton()
            cy.screenshot(`escenario-1_${versionghost}_8`)
        })

        And('Hace click en el boton de confirm post', ()=>{
            newPost.confirmPostButton()
            //cy.screenshot(`escenario-1_${versionghost}_9`)
        })

    Then('Validar el mensaje de confirmacion', ()=>{
        newPost.checkMessage()
        cy.screenshot(`escenario-1_${versionghost}_9`)
    })

//Verificar un nuevo post
    Given('Ingresar al sitio', ()=>{
        cy.visit(baseUrl)
    })

    When('Hace click al post New-Post', ()=>{
        checkPost.postUrl()
        cy.screenshot(`escenario-1_${versionghost}_10`)
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
        cy.visit('/'+'ghost/#/posts')
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