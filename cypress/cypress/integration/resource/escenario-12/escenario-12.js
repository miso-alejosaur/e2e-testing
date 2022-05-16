import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const loginPage = require('../../pages/loginPage')
const newPost = require('../../pages/newPost')
const checkPost = require('../../pages/checkPost')
const checkPostDelete = require('../../pages/checkPostDelete')
const checkPostDrafts = require('../../pages/checkPostDrafts')

//Inicio de sesión
Given('Ingresa a la pagina de inicio de sesion', ()=> {
    cy.visit('/')
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
    })

        And('Ingresa el titulo del post {string}', (namepost)=>{
            newPost.nameInput(namepost)
        })

        And('Ingresa la descripcion del post {string}', (textpost)=>{
            newPost.textInput(textpost)
        })

        And('Hace click en el boton de post', ()=>{
            newPost.backPost()
        })

    Then('Validar la url new posts', ()=>{
        newPost.checkUrl()
        cy.screenshot("1. Crear post")
    })

//Verificar el nuevo post en el Drafs
    When('Ingresar al sitio Drafts', ()=>{
        checkPostDrafts.draftsButton()
    })

    Then('Validar titulo del post New-Post Drafts', ()=>{
        checkPostDrafts.labelTitle()
        cy.screenshot("2. Validar titulo del post New-Post Drafts")
    })

//Eliminar el nuevo post
    Given('Ingresar al sitio posts deleteshed', ()=>{
        cy.wait(500)
        cy.visit('/'+'#/posts')
    })

    When('Hacer click en la lista de post delete', ()=>{
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
        cy.screenshot("3. Eliminar post")
    })

//Verificar el nuevo post no este en el Drafs
    When('Ingresar al sitio Drafts 2', ()=>{
        checkPostDrafts.draftsButton()
    })

    Then('Validar titulo del post New-Post no este en el Drafts', ()=>{
        checkPostDrafts.labelTitleNot()
        cy.screenshot("4. Validar titulo del post New-Post no este en el Drafts")
    })