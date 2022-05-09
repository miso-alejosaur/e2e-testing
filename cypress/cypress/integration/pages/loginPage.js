class loginPage{
    // Variables para el inicio de sesión
    user = 'test@test.tt';
    pass = '1234567890a.';
    
    //Constructor de la clase
    elements = {
        userInput: () => cy.get('#ember7'),
        passInput: () => cy.get('#ember9'),
        userButton: () => cy.get('#ember11'),
        checkLogin: () => cy.url().should('contains', '/#/dashboard')
    }

    //Función de inicar sesión
    singIn = () =>{
        
        
        cy.get(this.userButton).click();
        cy.url().should('contains', '/#/dashboard');
    }

    typeUser = () =>{
        this.elements.userInput().clear().type(this.user)
    }

    typePassword = () =>{
        this.elements.passInput().clear().type(this.pass)
    }

    clickLogin = () =>{
        this.elements.userButton().click()
    }

    checkPage = () =>{
        this.elements.checkLogin()
    }

}

export default new loginPage();