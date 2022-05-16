import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const loginPage = require('../../pages/loginPage')
const newPost = require('../../pages/newPost')
const checkPost = require('../../pages/checkPost')
const checkPostDelecte = require('../../pages/checkPostDelete')

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

        And('Hace click en el boton de create post', ()=>{
            newPost.createPostButton()
        })

        And('Hace click en el boton de publish post', ()=>{
            newPost.publishPostButton()
        })

        And('Hace click en el boton de confirm post', ()=>{
            newPost.confirmPostButton()
        })

    Then('Validar el mensaje de confirmacion', ()=>{
        newPost.checkMessage()
        cy.screenshot("1. Crear post")
    })

//Verificar un nuevo post
    Given('Ingresar al sitio', ()=>{
        cy.visit('http://localhost:2368/')
    })

    When('Hace click al post New-Post', ()=>{
        checkPost.postUrl()
    })

    Then('Validar la url del New-Post', ()=>{
        checkPost.checkUrl()
    })

    Then('Validar titulo del post New-Post', ()=>{
        checkPost.labelTitle()
        cy.screenshot("2. Validar titulo del post New-Post")
    })

//Despublicar el nuevo post
    Given('Ingresar al sitio posts', ()=>{
        cy.wait(500)
        cy.visit('/'+'#/posts')
    })

    When('Hacer en la lista de post', ()=>{
        newPost.labelPost()
    })

    And('Hace click en el boton de update post', ()=>{
        newPost.createPostButton()
    })

    And('Hace click en la opcion unpublished', ()=>{
        newPost.unpublishedButton()
    })

    And('Hace click en el boton update', ()=>{
        newPost.publishPostButton()
    })
    
    Then('Validar mensaje de update', ()=>{
        newPost.checkMessageUpdate()
        cy.screenshot("3. Despublicar el new post")
    })

//Verificar el nuevo post eliminado
    Given('Ingresar al sitio home', ()=>{
        cy.visit('http://localhost:2368/')
    })

    When('Ingresar al sitio New-Post despublicado', ()=>{
        cy.visit('/'+'new-post')
    })

    Then('Validar titulo del post New-Post despublicado', ()=>{
        checkPostDelecte.labelTitle()
        cy.screenshot("4. Validar titulo del post New-Post despublicado")
    })

//Eliminar el nuevo post
    Given('Ingresar al sitio posts delete', ()=>{
        cy.wait(500)
        cy.visit('/'+'#/posts')
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
        cy.screenshot("5. Eliminar post")
    })