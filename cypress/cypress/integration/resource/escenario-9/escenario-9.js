import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import checkPost from "../../pages/checkPost";
const loginPage = require('../../pages/loginPage')
const newTag = require('../../pages/newTag')
const newPost = require('../../pages/newPost')
const checkTag = require('../../pages/checkTag')

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
    Given('Ingresar al sitio', ()=>{
        cy.visit('http://localhost:2368/')
    })

    When('Hace click al post New-Post', ()=>{
        checkTag.postUrl()
    })

    Then('Validar la url del New-Post', ()=>{
        checkTag.checkUrl()
    })

    Then('Validar titulo del post New-Post', ()=>{
        checkTag.labelTitle()
    })

    When('Hace click al tag New-Post', ()=>{
        checkTag.tagButton()
    })

    And('Hace click al New-Post-2', ()=>{
        checkTag.taglabel()
    })

    Then('Validar la url del New-Post-2', ()=>{
        checkTag.checkUrl2()
    })

    Then('Validar titulo del post New-Post-2', ()=>{
        checkPost.labelTitle2()
        cy.screenshot("3. Validar titulo del post New-Post-2")
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
        cy.screenshot("4. Eliminar post 1")
    })

    //Eliminar el segundo post
    Given('Ingresar al sitio posts 2', ()=>{
        cy.wait(500)
        cy.visit('/'+'#/posts')
    })

    When('Hacer click en la lista de post 2', ()=>{
        newPost.labelPost2()
    })

    And('Hacer click en menu del post 2', ()=>{
        newPost.menuPost()
    })

    And('Hace click en el boton delete 2', ()=>{
        newPost.deleteButton()
    })

    And('Hace click en el boton confirmar delete 2', ()=>{
        newPost.confirmDeleteButton()
    })

    Then('Validar la url posts', ()=>{
        newPost.checkUrl()
        cy.screenshot("5. Eliminar post 2")
    })

//Eliminar el nuevo tag
    Given('Ingresar al sitio new tag', ()=>{
        cy.wait(500)
        cy.visit('/'+'#/tags/new-tag')
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
