class checkPostDrafts{
    // Variables para crear post
    
    elements = {
        draftsButton: () => cy.get('.gh-nav-viewname').contains('Drafts'),
        labelTitle: () => cy.get('h3').contains('New-Post'),
    }

    // Dar clic al boton de Drafts
    draftsButton = () =>{
        cy.wait(500)
        this.elements.draftsButton().click()
    }

    // Validar titulo del post 'New-Post'
    labelTitle = () =>{
        cy.wait(500)
        this.elements.labelTitle().should('have.text', '\n                New-Post\n            ');
    }
}

export default new checkPostDrafts();