Feature: Pagina Inicio Sesion

    Feature Pagina donde los usuarios podran inicar sesion en sus cuentas
    
    Scenario: Inicio de Sesion Exitoso
    Given Un usuario ingresa a la página de inicio de sesion
    When Un usuario ingresa el nombre de usuario "test@test.tt"
    And Un usuario ingresa la contraseña "1234567890a."
    And Un usuario hace click en el boton de inicio de sesion
    Then Un usuario iniciara sesion