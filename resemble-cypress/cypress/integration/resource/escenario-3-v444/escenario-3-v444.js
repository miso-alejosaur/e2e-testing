import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const loginPage = require('../../pages/loginPage')
const newTag = require('../../pages/newTag')
const newPost = require('../../pages/newPost')
const checkTagAdmin = require('../../pages/checkTagAdmin')
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
            newTag.saveButton2()
        })

    Then('Validar en la listas de tag el New-tag', ()=>{
        newTag.labelTag()
    })

//Crear post
    When('Hace click en el boton de new post', ()=>{
        newPost.newPostButton()
    })

        And('Ingresa el titulo del post {string}', (namepost)=>{
            newPost.nameInput2(namepost)
        })

        And('Ingresa la descripcion del post {string}', (textpost)=>{
            newPost.textInput(textpost)
        })

        And('Hacer click en el boton menu del post', ()=>{
            newPost.menuPost()
        })

        And('Selecionar el {string}', (selecttag)=>{
            newPost.listTag2(selecttag)
            //newPost.menuPost()
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

//Verificar un nuevo post con el nuevo tag
    Given('Ingresar al sitio del posts para realizar el filtro', ()=>{
        cy.wait(500)
        cy.visit('/'+'ghost/#/posts')
        cy.screenshot(`01-${versionghost}-CrearPostconTagyFiltrar`)
    })

    When('Hace click al filtro Tag', ()=>{
        checkTagAdmin.filtroTag()
        cy.screenshot(`02-${versionghost}-CrearPostconTagyFiltrar`)
    })

    Then('Validar titulo del post New-Post', ()=>{
        checkTagAdmin.labelTitle()
        cy.screenshot(`03-${versionghost}-CrearPostconTagyFiltrar`)
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