import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const loginPage = require('../../pages/loginPage')
const newTag = require('../../pages/newTag')
const newPost = require('../../pages/newPost')
const checkTag = require('../../pages/checkTag')
const baseUrl = Cypress.config("baseUrl")
const versionghost = Cypress.config("versionghost")

//Inicio de sesión
Given('Ingresa a la pagina de inicio de sesion', ()=> {
    cy.visit('/ghost/')
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
        cy.screenshot(`01-${versionghost}-CrearPostconTag`)
    })

        And('Hace click en el boton de new tag', ()=>{
            newTag.newTagButton()
            cy.screenshot(`02-${versionghost}-CrearPostconTag`)
        })

        And('Ingresa el nombre del tag {string}', (nametag)=>{
            newTag.nameInput(nametag)
            cy.screenshot(`03-${versionghost}-CrearPostconTag`)
        })

        And('Ingresa la descripcion del tag {string}', (texttag)=>{
            newTag.descriptionInput(texttag)
            cy.screenshot(`04-${versionghost}-CrearPostconTag`)
        })

        And('Hace click en el boton de save post', ()=>{
            newTag.saveButton()
            cy.screenshot(`05-${versionghost}-CrearPostconTag`)
        })

    Then('Validar en la listas de tag el New-tag', ()=>{
        newTag.labelTag()
        cy.screenshot(`06-${versionghost}-CrearPostconTag`)
    })

//Crear post
    When('Hace click en el boton de new post', ()=>{
        newPost.newPostButton()
        cy.screenshot(`07-${versionghost}-CrearPostconTag`)
    })

        And('Ingresa el titulo del post {string}', (namepost)=>{
            newPost.nameInput(namepost)
            cy.screenshot(`08-${versionghost}-CrearPostconTag`)
        })

        And('Ingresa la descripcion del post {string}', (textpost)=>{
            newPost.textInput(textpost)
            cy.screenshot(`09-${versionghost}-CrearPostconTag`)
        })

        And('Hacer click en el boton menu del post', ()=>{
            newPost.menuPost()
            cy.screenshot(`10-${versionghost}-CrearPostconTag`)
        })

        And('Selecionar el {string}', (selecttag)=>{
            newPost.listTag(selecttag)
            cy.screenshot(`11-${versionghost}-CrearPostconTag`)
            //newPost.menuPost()
        })

        And('Hace click en el boton de create post', ()=>{
            newPost.createPostButton()
            cy.screenshot(`12-${versionghost}-CrearPostconTag`)
        })

        And('Hace click en el boton de publish post', ()=>{
            newPost.publishPostButton()
            cy.screenshot(`13-${versionghost}-CrearPostconTag`)
        })

        And('Hace click en el boton de confirm post', ()=>{
            newPost.confirmPostButton()
            cy.screenshot(`14-${versionghost}-CrearPostconTag`)
        })

    Then('Validar el mensaje de confirmacion', ()=>{
        newPost.checkMessage()
        cy.screenshot(`15-${versionghost}-CrearPostconTag`)
    })

//Verificar un nuevo post con el nuevo tag
    Given('Ingresar al sitio', ()=>{
        cy.visit(baseUrl)
        cy.screenshot(`16-${versionghost}-CrearPostconTag`)
    })

    When('Hace click al post New-Post', ()=>{
        checkTag.postUrl()
        cy.screenshot(`17-${versionghost}-CrearPostconTag`)
    })

    Then('Validar la url del New-Post', ()=>{
        checkTag.checkUrl()
        cy.screenshot(`18-${versionghost}-CrearPostconTag`)
    })

    Then('Validar titulo del post New-Post', ()=>{
        checkTag.labelTitle()
    })

//Eliminar el nuevo post
    Given('Ingresar al sitio posts', ()=>{
        cy.wait(500)
        cy.visit('/'+'ghost/#/posts')
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
    })

//Eliminar el nuevo tag
    Given('Ingresar al sitio new tag', ()=>{
        cy.wait(500)
        cy.visit('/'+'ghost/#/tags/new-tag')
    })

    When('Hace click en el boton delete tag', ()=>{
        newTag.deleteButton()
    })

   And('Hace click en el boton confirmar delete', ()=>{
        newTag.confirmDeleteButton()
    })

    Then('Validar la url tags', ()=>{
        newTag.checkUrl()
    })
