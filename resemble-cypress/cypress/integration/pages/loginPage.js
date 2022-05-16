class loginPage{
    // Variables para el inicio de sesión
    user = 'test@test.tt';
    pass = '1234567890a.';
    
    elements = {
        userInput: () => cy.get('.email'),
        passInput: () => cy.get('.password'),
        userButton: () => cy.get('.login'),
        checkLogin: () => cy.url().should('contains', '/#/site'),
        checkLogin2: () => cy.url().should('contains', '/#/dashboard')
    }

    //Función de inicar sesión
    
    singIn = () =>{
        this.elements.userInput().clear().type(this.user)
        this.elements.passInput().clear().type(this.pass)
        this.elements.userButton().click()
    }

    checkPage = () =>{
        cy.wait(1000)
        this.elements.checkLogin()
    }
    checkPage2 = () =>{
        cy.wait(1000)
        this.elements.checkLogin2()
    }

}

export default new loginPage();