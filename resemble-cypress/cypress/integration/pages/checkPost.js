class checkPost{
    // Variables para crear post
    
    elements = {
        postUrl: () => cy.get('[href="/new-post/"]'),
        postUrl2: () => cy.get('[href="/new-post/"]'),
        labelTitle: () => cy.get('h1'),
        labelAuthor: () => cy.get('a').contains('New Author'),
        checkUrl: () => cy.url().should('contains', '/new-post')
    }

    // Hace click al post 'New-Post'
    postUrl = () =>{
        cy.wait(1500)
        this.elements.postUrl().click()
    }

    // Validar la url del New-Post
    checkUrl = (textpost) =>{
        cy.wait(500)
        this.elements.checkUrl()
    }

    // Validar titulo del post 'New-Post'
    labelTitle = () =>{
        cy.wait(500)
        this.elements.labelTitle().should('have.text', 'New-Post');
    }

    // Validar titulo del post 'New-Post'
    labelTitle2 = () =>{
        cy.wait(500)
        this.elements.labelTitle().should('have.text', 'New-Post-2');
    }

    // Validar nombre del 'New Author'
    labelAuthor = () =>{
        cy.wait(500)
        this.elements.labelAuthor().should('have.text', 'New Author');
    }
}

export default new checkPost();