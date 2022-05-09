class signInPage{
    // Variables para el inicio de sesión
    user = 'test@test.tt';
    pass = '1234567890a.';
    
    //Constructor de la clase
    constructor(){
        this.userInput = '#ember7';
        this.passInput = '#ember9';
        this.userButton = '#ember11';
    }

    //Función de inicar sesión
    singIn = () =>{
        cy.get(this.userInput).clear().type(this.user);
        cy.get(this.passInput).clear().type(this.pass);
        cy.get(this.userButton).click();
        cy.url().should('contains', '/#/dashboard');
    }
}

export default new signInPage();