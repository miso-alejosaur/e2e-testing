class newTag{
    // Variables para crear tag
    
    elements = {
        tagButton: () => cy.get('.ember-viewember-view [href="#/tags/"]'),
        newTagButton: () => cy.get('[href="#/tags/new/"]').first(),
        nameInput: () => cy.get('[name="name"]'),
        descriptionInput: () => cy.get('[name="description"]'),
        saveButton: () => cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view'),
        labelTag: () => cy.url().should('contains', '#/tags'),
        deleteButton: () => cy.get('.gh-btn.gh-btn-red.gh-btn-icon'),
        confirmDeleteButton: () => cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view'),
        checkUrl: () => cy.url().should('contains', '#/tags')
    }

    // Hace click en el boton de tag
    tagButton = () =>{
        cy.wait(1500)
        cy.visit('/'+'/#/tags')
    }

    // Hace click en el boton de new tag
    newTagButton = () =>{
        cy.wait(1000)
        this.elements.newTagButton().click()
    }

    // Ingresa el nombre del tag 'New-Tag'
    nameInput = (nametag) =>{
        cy.wait(1500)
        this.elements.nameInput().type(nametag)
    }

    // Ingresa la descripcion del tag 'Description new tag'
    descriptionInput = (texttag) =>{
        this.elements.descriptionInput().type(texttag)
    }

    // Hace click en el boton de save post
    saveButton = () =>{
        this.elements.saveButton().click();
    }

    // Validar en la listas de tag el New-tag
    labelTag = () =>{
        cy.wait(500)
        cy.visit('/'+'/#/tags')
        this.elements.labelTag()
    }

    // Dar click en el boton delete
    deleteButton = () =>{
        cy.wait(1500)
        this.elements.deleteButton().click()
    }

    // Dar click en el boton confirmar delete
    confirmDeleteButton = () =>{
        cy.wait(1500)
        this.elements.confirmDeleteButton().click()
    }

    // Validar la url #/posts
    checkUrl = () =>{
        cy.wait(500)
        this.elements.checkUrl()
    }
}

export default new newTag();