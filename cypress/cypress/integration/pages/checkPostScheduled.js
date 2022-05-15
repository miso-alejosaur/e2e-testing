class checkPostScheduled{
    // Variables para crear post
    
    elements = {
        scheduledButton: () => cy.get('.gh-nav-viewname').contains('Scheduled'),
        labelTitle: () => cy.get('h3').contains('New-Post'),
        labelTitleNot: () => cy.get('h3').contains('New-Post'),
    }

    // Dar clic al boton de Drafts
    scheduledButton = () =>{
        cy.wait(500)
        this.elements.scheduledButton().click()
    }

    // Validar titulo del post 'New-Post'
    labelTitle = () =>{
        cy.wait(500)
        this.elements.labelTitle().should('have.text', '\n                New-Post\n            ');
    }

    // Validar titulo del post no este 'New-Post'
    labelTitleNot = () =>{
        cy.wait(500)
        this.elements.labelTitleNot().should('to.not.equal', '\n                New-Post\n            ');
    }
}

export default new checkPostScheduled();