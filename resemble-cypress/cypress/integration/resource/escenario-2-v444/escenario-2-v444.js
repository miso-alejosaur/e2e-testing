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
    loginPage.checkPage2()
})

//Crear tag
    When('Hace click en el boton de tag', ()=>{
        newTag.tagButton()
        cy.screenshot(`escenario-2_${versionghost}_1`)
    })

        And('Hace click en el boton de new tag', ()=>{
            newTag.newTagButton()
            cy.screenshot(`escenario-2_${versionghost}_2`)
        })

        And('Ingresa el nombre del tag {string}', (nametag)=>{
            newTag.nameInput(nametag)
            cy.screenshot(`escenario-2_${versionghost}_3`)
        })

        And('Ingresa la descripcion del tag {string}', (texttag)=>{
            newTag.descriptionInput(texttag)
            cy.screenshot(`escenario-2_${versionghost}_4`)
        })

        And('Hace click en el boton de save post', ()=>{
            newTag.saveButton2()
            cy.screenshot(`escenario-2_${versionghost}_5`)
        })

    Then('Validar en la listas de tag el New-tag', ()=>{
        newTag.labelTag()
        cy.screenshot(`escenario-2_${versionghost}_6`)
    })

//Crear post
    When('Hace click en el boton de new post', ()=>{
        newPost.newPostButton()
        cy.screenshot(`escenario-2_${versionghost}_7`)
    })

        And('Ingresa el titulo del post {string}', (namepost)=>{
            newPost.nameInput2(namepost)
            cy.screenshot(`escenario-2_${versionghost}_8`)
        })

        And('Ingresa la descripcion del post {string}', (textpost)=>{
            newPost.textInput(textpost)
            cy.screenshot(`escenario-2_${versionghost}_9`)
        })

        And('Hacer click en el boton menu del post', ()=>{
            newPost.menuPost()
            cy.screenshot(`escenario-2_${versionghost}_10`)
        })

        And('Selecionar el {string}', (selecttag)=>{
            newPost.listTag2(selecttag)
            cy.screenshot(`escenario-2_${versionghost}_11`)
            //newPost.menuPost()
        })

        And('Hace click en el boton de create post', ()=>{
            newPost.createPostButton()
            cy.screenshot(`escenario-2_${versionghost}_12`)
        })

        And('Hace click en el boton de publish post', ()=>{
            newPost.publishPostButton()
            cy.screenshot(`escenario-2_${versionghost}_13`)
        })

        And('Hace click en el boton de confirm post', ()=>{
            newPost.confirmPostButton()
            cy.screenshot(`escenario-2_${versionghost}_14`)
        })

    Then('Validar el mensaje de confirmacion', ()=>{
        newPost.checkMessage()
        cy.screenshot(`escenario-2_${versionghost}_15`)
    })

//Verificar un nuevo post con el nuevo tag
    Given('Ingresar al sitio', ()=>{
        cy.visit(baseUrl)
        cy.screenshot(`escenario-2_${versionghost}_16`)
    })

    When('Hace click al post New-Post', ()=>{
        checkTag.postUrl()
        cy.screenshot(`escenario-2_${versionghost}_17`)
    })

    Then('Validar la url del New-Post', ()=>{
        checkTag.checkUrl()
        cy.screenshot(`escenario-2_${versionghost}_18`)
    })

    Then('Validar titulo del post New-Post', ()=>{
        checkTag.labelTitle2()
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
