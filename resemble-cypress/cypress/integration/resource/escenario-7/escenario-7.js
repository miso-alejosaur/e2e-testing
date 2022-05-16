import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const loginPage = require('../../pages/loginPage')
const newPost = require('../../pages/newPost')
const checkPost = require('../../pages/checkPost')
const checkPostDelecte = require('../../pages/checkPostDelete')
const baseUrl = Cypress.config("baseUrl")
const versionghost = Cypress.config("versionghost")

//Inicio de sesión
Given('Ingresa a la pagina de inicio de sesion', ()=> {
    cy.visit('/ghost')
})

    When('Ingresa el nombre de usuario {string} e ingresa la contraseña {string}', (username,password)=>{
        loginPage.singIn()
    })

Then('Iniciar Sesion Exitoso', ()=>{
    loginPage.checkPage()
})

//Crear post
    When('Hace click en el boton de new post', ()=>{
        newPost.newPostButton()
        cy.screenshot(`escenario-7_${versionghost}_1`)
    })

        And('Ingresa el titulo del post {string}', (namepost)=>{
            newPost.nameInput(namepost)
            cy.screenshot(`escenario-7_${versionghost}_2`)
        })

        And('Ingresa la descripcion del post {string}', (textpost)=>{
            newPost.textInput(textpost)
            cy.screenshot(`escenario-7_${versionghost}_3`)
        })

        And('Hace click en el boton de create post', ()=>{
            newPost.createPostButton()
            cy.screenshot(`escenario-7_${versionghost}_4`)
        })

        And('Hace click en el boton de publish post', ()=>{
            newPost.publishPostButton()
            cy.screenshot(`escenario-7_${versionghost}_5`)
        })

        And('Hace click en el boton de confirm post', ()=>{
            newPost.confirmPostButton()
            cy.screenshot(`escenario-7_${versionghost}_6`)
        })

    Then('Validar el mensaje de confirmacion', ()=>{
        newPost.checkMessage()
        cy.screenshot(`escenario-7_${versionghost}_7`)
    })

//Verificar un nuevo post
    Given('Ingresar al sitio', ()=>{
        cy.visit(baseUrl)
        cy.screenshot(`escenario-7_${versionghost}_8`)
    })

    When('Hace click al post New-Post', ()=>{
        checkPost.postUrl()
        cy.screenshot(`escenario-7_${versionghost}_9`)
    })

    Then('Validar la url del New-Post', ()=>{
        checkPost.checkUrl()
        cy.screenshot(`escenario-7_${versionghost}_10`)
    })

    Then('Validar titulo del post New-Post', ()=>{
        checkPost.labelTitle()
        cy.screenshot(`escenario-7_${versionghost}_11`)
    })

//Despublicar el nuevo post
    Given('Ingresar al sitio posts', ()=>{
        cy.wait(500)
        cy.visit('/'+'ghost/#/posts')
        cy.screenshot(`escenario-7_${versionghost}_12`)
    })

    When('Hacer en la lista de post', ()=>{
        newPost.labelPost()
        cy.screenshot(`escenario-7_${versionghost}_13`)
    })

    And('Hace click en el boton de update post', ()=>{
        newPost.createPostButton()
        cy.screenshot(`escenario-7_${versionghost}_14`)
    })

    And('Hace click en la opcion unpublished', ()=>{
        newPost.unpublishedButton()
        cy.screenshot(`escenario-7_${versionghost}_15`)
    })

    And('Hace click en el boton update', ()=>{
        newPost.publishPostButton()
        cy.screenshot(`escenario-7_${versionghost}_16`)
    })
    
    Then('Validar mensaje de update', ()=>{
        newPost.checkMessageUpdate()
        cy.screenshot(`escenario-7_${versionghost}_17`)
    })

//Verificar el nuevo post eliminado
    Given('Ingresar al sitio home', ()=>{
        cy.visit(baseUrl)
        cy.screenshot(`escenario-7_${versionghost}_18`)
    })

    When('Ingresar al sitio New-Post despublicado', ()=>{
        cy.visit('/'+'ghost/new-post')
        cy.screenshot(`escenario-7_${versionghost}_19`)
    })

    Then('Validar titulo del post New-Post despublicado', ()=>{
        checkPostDelecte.labelTitle()
        cy.screenshot(`escenario-7_${versionghost}_20`)
    })

//Eliminar el nuevo post
    Given('Ingresar al sitio posts delete', ()=>{
        cy.wait(500)
        cy.visit('/'+'ghost/#/posts')
    })

    When('Hacer en la lista de post delete', ()=>{
        newPost.labelPost()
    })

    And('Hacer click en menu del post delete', ()=>{
        newPost.menuPost()
    })

    And('Hacer click en el boton delete', ()=>{
        newPost.deleteButton()
    })

    And('Hacer click en el boton confirmar delete', ()=>{
        newPost.confirmDeleteButton()
    })
    
    Then('Validar la url posts delete', ()=>{
        newPost.checkUrl()
    })