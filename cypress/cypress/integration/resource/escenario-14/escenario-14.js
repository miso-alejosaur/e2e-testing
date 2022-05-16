import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const loginPage = require('../../pages/loginPage')
const newPost = require('../../pages/newPost')
const checkPost = require('../../pages/checkPost')
const newAuthor = require('../../pages/newAuthor')
const checkTagAdmin = require('../../pages/checkTagAdmin')

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

//Modificar nombre Author post
    When('Ingresar al sitio de Author', ()=>{
        newAuthor.membersButton()
    })

        And('Hacer click en la lista de autor', ()=>{
            newAuthor.avatarMembers()
        })

        And('Modificar el nombre del author {string}', (name)=>{
            newAuthor.textName(name)
        })

        And('Hacer click en el boton Save del Author', ()=>{
            newAuthor.saveButton()
        })

    Then('Validar el nombre del Author', ()=>{
        newAuthor.labelTitle2()
        cy.screenshot("2. Modificar nombre Author post")
    })

//Verificar un nuevo post con el nuevo tag
    Given('Ingresar al sitio del posts para realizar el filtro', ()=>{
        cy.wait(500)
        cy.visit('/'+'#/posts')
    })

    When('Hace click al filtro Tag', ()=>{
        checkTagAdmin.filtroTagAuthors()
    })

    Then('Validar titulo del post New Author 2', ()=>{
        checkTagAdmin.labelTitle()
        cy.screenshot("3. Validar titulo del post New Author 2")
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
        cy.screenshot("4. Eliminar post")
    })