class checktagDelecte{
    // Variables para crear post
    
    elements = {
        labelTitle: () => cy.get('h1'),
    }

    // Validar titulo del post 'New-Post'
    labelTitle = () =>{
        cy.wait(500)
        this.elements.labelTitle().should('have.text', '404');
    }
}

export default new checktagDelecte();