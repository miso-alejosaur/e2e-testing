import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const loginPage = require('../../pages/loginPage')
const newPost = require('../../pages/newPost')
const checkPostScheduled = require('../../pages/checkPostScheduled')

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

        And('Hace click en el boton scheduled', ()=>{
            newPost.scheduleButton()
        })

        And('Hace click en el boton de publish post', ()=>{
            newPost.publishPostButton()
        })

        And('Hace click en el boton de confirm post', ()=>{
            newPost.confirmPostButton()
        })

    Then('Validar el mensaje de confirmacion', ()=>{
        newPost.checkMessage2()
        cy.screenshot("1. Crear post")
    })

//Verificar el nuevo post en el Drafs
    When('Ingresar al sitio Scheduled', ()=>{
        checkPostScheduled.scheduledButton()
    })

    Then('Validar titulo del post New-Post Scheduled', ()=>{
        checkPostScheduled.labelTitle()
        cy.screenshot("2. Validar titulo del post New-Post Scheduled")
    })

//Publicar el nuevo post
    Given('Ingresar al sitio posts', ()=>{
        cy.wait(500)
        cy.visit('/'+'#/posts')
    })

    When('Hacer en la lista de post', ()=>{
        newPost.labelPost()
    })

    And('And Hace click en el boton de published post', ()=>{
        newPost.createPostButton()
    })

    And('Hace click en el boton publish', ()=>{
        newPost.scheduleButton3()
    })

    And('Hace click en el boton de publish post', ()=>{
        newPost.publishPostButton()
    })

    And('Hace click en el boton de confirm post', ()=>{
        newPost.confirmPostButton()
    })

    And('Hace click en el boton de confirm post 2', ()=>{
        newPost.confirmPostButton()
    })

    Then('Validar el mensaje de confirmacion publish', ()=>{
        newPost.checkMessage()
        cy.screenshot("3. Validar el mensaje de confirmacion publish")
    })

//Verificar el nuevo post no este en el Scheduled
    When('Ingresar al sitio Scheduled 2', ()=>{
        checkPostScheduled.scheduledButton()
    })

    Then('Validar titulo del post New-Post no este en el Scheduled', ()=>{
        checkPostScheduled.labelTitleNot()
        cy.screenshot("4. Validar titulo del post New-Post no este en el Scheduled")
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
        cy.screenshot("5. Eliminar post")
    })