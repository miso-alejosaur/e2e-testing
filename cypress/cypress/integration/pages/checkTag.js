class checkTag{
    // Variables para eliminar tag
    
    elements = {
        postUrl: () => cy.get('[href="/new-post/"]'),
        labelTitle: () => cy.get('.article-tag > a'),
        checkUrl: () => cy.url().should('contains', '/new-post'),
        tagButton: () => cy.get('a').contains('New-Tag'),
        taglabel: () => cy.get('h2').contains('New-Post-2'),
        taglabel2: () => cy.get('h1').contains('New-Post-2'),
        checkUrl2: () => cy.url().should('contains', '/new-post-2'),
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
        this.elements.labelTitle().should('have.text', 'New-Tag');
    }

    // Hace click al tag
    tagButton = () =>{
        cy.wait(1000)
        this.elements.tagButton().click()
    }

    // Hace click al New-Post-2
    taglabel = () =>{
        cy.wait(1000)
        this.elements.taglabel().click()
    }

    // Validar la url del New-Post-2
    checkUrl2 = () =>{
        cy.wait(500)
        this.elements.checkUrl2()
    }

}

export default new checkTag();