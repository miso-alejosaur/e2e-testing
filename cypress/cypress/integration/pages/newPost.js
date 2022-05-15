class newPost{
    // Variables para crear post
    
    elements = {
        newPostButton: () => cy.get('[title="New post"]'),
        nameInput: () => cy.get('[placeholder="Post title"]'),
        textInput: () => cy.get('.koenig-editor__editor'),
        menuPost: () => cy.get('[title="Settings"]'),
        menuPost2: () => cy.get('.settings-menu-open'),
        listTag: () => cy.get('.ember-power-select-trigger-multiple-input').first().type('New-tag{enter}'),
        createPostButton: () => cy.get('.gh-publishmenu'),
        publishPostButton: () => cy.get('.gh-publishmenu-button'),
        confirmPostButton: () => cy.get('.gh-btn.gh-btn-black.gh-btn-icon.ember-view'),
        label: () => cy.get('.gh-notification-title'),
        postButton: () => cy.get('href="#/posts/"'),
        labelPost: () => cy.get('h3').contains('New-Post'),
        labelPost2: () => cy.get('h3').contains('New-Post-2'),
        labelPostUpdate: () => cy.get('h3').contains('New-Post-Modified'),
        deleteButton: () => cy.get('.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button'),
        confirmDeleteButton: () => cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view'),
        checkUrl: () => cy.url().should('contains', '#/posts'),
        unpublishedButton: () => cy.get('.gh-publishmenu-radio-label').first(),
        backPost: () => cy.get('.ember-view.gh-editor-back-button'),
        scheduleButton: () => cy.get('.gh-publishmenu-radio-label').contains('Schedule it for later'),
        scheduleButton3: () => cy.get('.gh-publishmenu-radio-label').contains('Revert to draft'),
        scheduleButton2: () => cy.get('.gh-publishmenu-radio-label').contains('Set it live now'),
    }

    // Dar click al boton de nuevo post
    newPostButton = () =>{
        cy.wait(1000)
        this.elements.newPostButton().click()
    }

    // Ingresar el titulo del post
    nameInput = (namepost) =>{
        cy.wait(1500)
        this.elements.nameInput().type(namepost)
    }

    // Ingresar la descripción del post
    textInput = (textpost) =>{
        cy.wait(1500)
        this.elements.textInput().type(textpost)
    }

    // Dar click al boton de menu del post
    menuPost = () =>{
        cy.wait(1500)
        this.elements.menuPost().click()
    }

    // Seleccionar el 'New-Tag'
    listTag = (selecttag) =>{
        cy.wait(1000)
        this.elements.listTag()
    }

    // Dar click al boton de crear post
    createPostButton = () =>{
        cy.wait(1000)
        this.elements.createPostButton().click()
    }

    // Dar click al boton de publicación del post
    publishPostButton = () =>{
        cy.wait(1000)
        this.elements.publishPostButton().click();
    }

    // Dar click al boton de confirmar publicación del post
    confirmPostButton = () =>{
        cy.wait(1000)
        this.elements.confirmPostButton().click();
    }

    // Validar mensaje de confirmación
    checkMessage = () =>{
        cy.wait(500)
        this.elements.label().should('have.text', 'Published');
    }

    // Dar click en la lista de post
    labelPost = () =>{
        cy.wait(500)
        this.elements.labelPost().click()
    }

    // Dar click en la lista de post 2
    labelPost2 = () =>{
        cy.wait(500)
        this.elements.labelPost2().click()
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

    // Validar mensaje de modificado
    checkMessageUpdated = () =>{
        cy.wait(500)
        this.elements.label().should('have.text', 'Updated');
    }

    // Dar click en la lista de post
    labelPostUpdate = () =>{
        cy.wait(500)
        this.elements.labelPostUpdate().click()
    }

    // Dar click en Unpublished
    unpublishedButton = () =>{
        cy.wait(500)
        this.elements.unpublishedButton().click()
    }

    // Validar mensaje de update
    checkMessageUpdate = () =>{
        cy.wait(500)
        this.elements.label().should('have.text', 'Saved');
    }

    // Dar click en de back post
    backPost = () =>{
        cy.wait(500)
        this.elements.backPost().click()
    }

    // Dar click en de schedule
    scheduleButton = () =>{
        cy.wait(1000)
        this.elements.scheduleButton().click()
    }

    // Validar mensaje de confirmación schedule
    checkMessage2 = () =>{
        cy.wait(500)
        this.elements.label().should('have.text', 'Scheduled');
    }

    // Dar click en de published
    scheduleButton2 = () =>{
        cy.wait(1000)
        this.elements.scheduleButton2().click()
    }

    // Dar click en de published
    scheduleButton3 = () =>{
        cy.wait(1000)
        this.elements.scheduleButton3().click()
    }
}

export default new newPost();