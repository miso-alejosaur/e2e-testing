import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const loginPage = require('../../pages/loginPage')
const newTag = require('../../pages/newTag')
const newPost = require('../../pages/newPost')
const checkTagAdmin = require('../../pages/checkTagAdmin')
const checkTagDelete = require('../../pages/checkTagDelete')

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

//Crear tag
    When('Hace click en el boton de tag', ()=>{
        newTag.tagButton()
    })

        And('Hace click en el boton de new tag', ()=>{
            newTag.newTagButton()
        })

        And('Ingresa el nombre del tag {string}', (nametag)=>{
            newTag.nameInput(nametag)
        })

        And('Ingresa la descripcion del tag {string}', (texttag)=>{
            newTag.descriptionInput(texttag)
        })

        And('Hace click en el boton de save post', ()=>{
            newTag.saveButton()
        })

    Then('Validar en la listas de tag el New-tag', ()=>{
        newTag.labelTag()
        cy.screenshot("1. Crear tag")
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

        And('Hacer click en el boton menu del post', ()=>{
            newPost.menuPost()
        })

        And('Selecionar el {string}', (selecttag)=>{
            newPost.listTag(selecttag)
            newPost.menuPost()
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
        cy.screenshot("2. Crear post")
    })

//Verificar un nuevo post con el nuevo tag
    Given('Ingresar al sitio del posts para realizar el filtro', ()=>{
        cy.wait(500)
        cy.visit('/'+'#/posts')
    })

    When('Hace click al filtro Tag', ()=>{
        checkTagAdmin.filtroTag2()
    })

    Then('Validar titulo del post New-Post', ()=>{
        checkTagAdmin.labelTitle()
        cy.screenshot("3. Validar titulo del post New-Post")
    })

//Verificar el nuevo tag no sea visible
    Given('Ingresar al sitio home tag', ()=>{
        cy.visit('http://localhost:2368/')
    })

    When('Ingresar al sitio New-Tag eliminado', ()=>{
        cy.visit('/'+'tag/hash-new-tag')
    })

    Then('Validar titulo del post New-Tag eliminado', ()=>{
        checkTagDelete.labelTitle()
        cy.screenshot("4. Validar titulo del post New-Tag eliminado")
    })

//Eliminar el nuevo post
    Given('Ingresar al sitio posts', ()=>{
        cy.wait(500)
        cy.visit('/'+'#/posts')
    })

    When('Hacer click en la lista de post', ()=>{
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
        cy.screenshot("5. Eliminar post")
    })

//Eliminar el nuevo tag
    Given('Ingresar al sitio new tag', ()=>{
        cy.wait(500)
        cy.visit('/'+'#/tags/hash-new-tag')
    })

    When('Hace click en el boton delete tag', ()=>{
        newTag.deleteButton()
    })

   And('Hace click en el boton confirmar delete', ()=>{
        newTag.confirmDeleteButton()
    })

    Then('Validar la url tags', ()=>{
        newTag.checkUrl()
        cy.screenshot("6. Eliminar tag")
    })