import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const loginPage = require('../../pages/loginPage')
const newPost = require('../../pages/newPost')
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
    })

//Verificar el nuevo post no este en el Drafs
    When('Ingresar al sitio Drafts 2', ()=>{
        checkPostDrafts.draftsButton()
    })

    Then('Validar titulo del post New-Post no este en el Drafts', ()=>{
        checkPostDrafts.labelTitleNot()
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
    })

//Verificar el nuevo post en el Drafs
    When('Ingresar al sitio Drafts', ()=>{
        checkPostDrafts.draftsButton()
    })

    Then('Validar titulo del post New-Post Drafts', ()=>{
        checkPostDrafts.labelTitle()
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
    })