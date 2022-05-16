class checkTagAdmin{
    // Variables para eliminar tag
    
    elements = {
        filtroTag: () => cy.get('.gh-contentfilter-tag > .ember-view > .ember-power-select-selected-item'),
        selectTag: () => cy.get('.ember-power-select-option').contains('New-Tag'),
        labelTitle: () => cy.get('h3'),
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
        this.elements.labelTitle().should('contain.text', 'New-Post');
    }
}

export default new checkTagAdmin();