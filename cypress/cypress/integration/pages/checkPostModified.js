class checkPostModified{
    // Variables para crear post
    
    elements = {
        postUrl: () => cy.get('[href="/new-post/"]'),
        labelTitle: () => cy.get('h1'),
        checkUrl: () => cy.url().should('contains', '/new-post')
    }

    // Hace click al post 'New-Post'
    postUrl = () =>{
        cy.wait(1500)
        this.elements.postUrl().click()
    }

    // Validar la url del New-Post
    checkUrl = () =>{
        cy.wait(500)
        this.elements.checkUrl()
    }

    // Validar titulo del post 'New-Post'
    labelTitle = () =>{
        cy.wait(500)
        this.elements.labelTitle().should('have.text', 'New-Post-Modified');
    }
}

export default new checkPostModified();