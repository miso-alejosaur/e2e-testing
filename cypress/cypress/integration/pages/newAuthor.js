class newAuthor{
    // Variables para crear post
    
    elements = {
        membersButton: () => cy.get('.gh-user-avatar.relative'),
        membersButton2: () => cy.get('.ember-view.dropdown-item').contains('Your profile'),
        avatarMembers: () => cy.get('.gh-member-avatar-image').first(),
        textName: () => cy.get('#user-name'),
        saveButton: () => cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view'),
        labelTitle: () => cy.get('h2.gh-canvas-title').contains('New Author'),
    }

    // Hace click al boton de Members
    membersButton = () =>{
        cy.wait(500)
        this.elements.membersButton().click()
        
    }

    // Hacer click en la lista de autor
    avatarMembers = () =>{
        cy.wait(500)
        this.elements.membersButton2().click()
    }

    // Modificar el nombre del author 'New Author'
    textName = (name) =>{
        cy.wait(500)
        this.elements.textName().clear()
        this.elements.textName().type(name, {force: true})
    }

    // Hacer click en save autor
    saveButton = () =>{
        cy.wait(500)
        this.elements.saveButton().click()
    }

    // Validar nombre del autor modificado
    labelTitle = () =>{
        cy.wait(500)
        this.elements.labelTitle().should('have.text', '\n                Settings\n                \n                Staff\n                \n                New Author\n\n            ')
    }
}

export default new newAuthor();