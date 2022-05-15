class checkTagAdmin{
    // Variables para eliminar tag
    
    elements = {
        filtroTag: () => cy.get('.gh-contentfilter-tag > .ember-view > .ember-power-select-selected-item'),
        filtroTagAuthors: () => cy.get('.ember-power-select-selected-item').contains('All authors'),
        selectTag: () => cy.get('.ember-power-select-option').contains('New-Tag'),
        selectTagAuthors: () => cy.get('.ember-power-select-option').contains('New Author 2'),
        labelTitle: () => cy.get('h3').contains('New-Post'),
    }

    // Hace click al post 'New-Post'
    filtroTag = () =>{
        cy.wait(1500)
        this.elements.filtroTag().click()
        cy.wait(500)
        this.elements.selectTag().click()
    }

    // Validar titulo del post 'New-Post'
    labelTitle = () =>{
        this.elements.labelTitle().should('have.text', '\n                New-Post\n            ');
    }

    // Hace click al post 'New Author 2'
    filtroTagAuthors = () =>{
        cy.wait(1500)
        this.elements.filtroTagAuthors().click()
        cy.wait(500)
        this.elements.selectTagAuthors().click()
    }
}

export default new checkTagAdmin();