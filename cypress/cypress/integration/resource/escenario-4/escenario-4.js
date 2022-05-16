import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const loginPage = require('../../pages/loginPage')
const newPost = require('../../pages/newPost')
const checkPost = require('../../pages/checkPost')
const checkPostModified = require('../../pages/checkPostModified')

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

//Modificar post
    When('Ingresar al sitio posts para modificar el post', ()=>{
        cy.wait(500)
        cy.visit('/'+'#/posts')
    })

        And('Hacer click en la lista de post para modificar el post', ()=>{
            newPost.labelPost()
        })

        And('Ingresa y modificar titulo del post {string}', (namepost)=>{
            newPost.nameInput(namepost)
        })

        And('Hace click en el boton para modifcar el post', ()=>{
            newPost.createPostButton()
        })

        And('Hace click en el boton de publish post modificado', ()=>{
            newPost.publishPostButton()
        })

    Then('Validar la url posts modificada', ()=>{
        newPost.checkMessageUpdated()
        cy.screenshot("3. Modificar post")
    })

//Verificar un nuevo post modificado
    Given('Ingresar al sitio modificado', ()=>{
        cy.visit('http://localhost:2368/')
    })

    When('Hace click al post New-Post-Modified', ()=>{
        checkPostModified.postUrl()
    })

    Then('Validar la url del New-Post-Modified', ()=>{
        checkPostModified.checkUrl()
    })

    Then('Validar titulo del post New-Post-Modified', ()=>{
        checkPostModified.labelTitle()
        cy.screenshot("4. Validar titulo del post New-Post-Modified")
    })

//Eliminar el nuevo post
    Given('Ingresar al sitio posts', ()=>{
        cy.wait(500)
        cy.visit('/'+'#/posts')
    })

    When('Hacer en la lista de post', ()=>{
        newPost.labelPostUpdate()
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
        cy.screenshot("5. Eliminar post")
    })