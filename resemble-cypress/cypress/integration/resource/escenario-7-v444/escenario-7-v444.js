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
    loginPage.checkPage2()
})

//Crear post
    When('Hace click en el boton de new post', ()=>{
        newPost.newPostButton()
        cy.screenshot(`01-${versionghost}-CrearPostPublicaryDespublicar`)
    })

        And('Ingresa el titulo del post {string}', (namepost)=>{
            newPost.nameInput2(namepost)
            cy.screenshot(`02-${versionghost}-CrearPostPublicaryDespublicar`)
        })

        And('Ingresa la descripcion del post {string}', (textpost)=>{
            newPost.textInput(textpost)
            cy.screenshot(`03-${versionghost}-CrearPostPublicaryDespublicar`)
        })

        And('Hace click en el boton de create post', ()=>{
            newPost.createPostButton()
            cy.screenshot(`04-${versionghost}-CrearPostPublicaryDespublicar`)
        })

        And('Hace click en el boton de publish post', ()=>{
            newPost.publishPostButton()
            cy.screenshot(`05-${versionghost}-CrearPostPublicaryDespublicar`)
        })

        And('Hace click en el boton de confirm post', ()=>{
            newPost.confirmPostButton()
            cy.screenshot(`06-${versionghost}-CrearPostPublicaryDespublicar`)
        })

    Then('Validar el mensaje de confirmacion', ()=>{
        newPost.checkMessage()
        cy.screenshot(`07-${versionghost}-CrearPostPublicaryDespublicar`)
    })

//Verificar un nuevo post
    Given('Ingresar al sitio', ()=>{
        cy.visit(baseUrl)
    })

    When('Hace click al post New-Post', ()=>{
        checkPost.postUrl()
    })

    Then('Validar la url del New-Post', ()=>{
        checkPost.checkUrl()
    })

    Then('Validar titulo del post New-Post', ()=>{
        checkPost.labelTitle()
    })

//Despublicar el nuevo post
    Given('Ingresar al sitio posts', ()=>{
        cy.wait(500)
        cy.visit('/'+'ghost/#/posts')
        cy.screenshot(`08-${versionghost}-CrearPostPublicaryDespublicar`)
    })

    When('Hacer en la lista de post', ()=>{
        newPost.labelPost()
        cy.screenshot(`09-${versionghost}-CrearPostPublicaryDespublicar`)
    })

    And('Hace click en el boton de update post', ()=>{
        newPost.createPostButton()
        cy.screenshot(`10-${versionghost}-CrearPostPublicaryDespublicar`)
    })

    And('Hace click en la opcion unpublished', ()=>{
        newPost.unpublishedButton()
        cy.screenshot(`11-${versionghost}-CrearPostPublicaryDespublicar`)
    })

    And('Hace click en el boton update', ()=>{
        newPost.publishPostButton()
        cy.screenshot(`12-${versionghost}-CrearPostPublicaryDespublicar`)
    })
    
    Then('Validar mensaje de update', ()=>{
        newPost.checkMessageUpdate()
        cy.screenshot(`13-${versionghost}-CrearPostPublicaryDespublicar`)
    })

//Verificar el nuevo post eliminado
    Given('Ingresar al sitio home', ()=>{
        cy.visit(baseUrl)
    })

    When('Ingresar al sitio New-Post despublicado', ()=>{
        cy.visit('/'+'ghost/new-post')
        cy.screenshot(`14-${versionghost}-CrearPostPublicaryDespublicar`)
    })

    Then('Validar titulo del post New-Post despublicado', ()=>{
        checkPostDelecte.labelTitle()
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