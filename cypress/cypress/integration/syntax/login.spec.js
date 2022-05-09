import signInPage from '../resource/signIn';

describe('Iniciar sesión en ghost',function(){
    
    it ('Inicio de sesión correcto...', function(){
        cy.visit('/');
        signInPage.singIn();
    })
})