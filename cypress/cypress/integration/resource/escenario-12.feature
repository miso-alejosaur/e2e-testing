Feature: Escenario 12: Crear Un Nuevo Post En Borrador - Verificar que este en la Lista de Drafts - Eliminar el Nuevo Post y Verificar que no este en la Lista de Drafts

    Feature Crear un post dejarlo en borrador - verificar que este en la Lista de Drafts - eliminar el post y verificar que no este en la Lista de Drafts
   
    Scenario: Crear un nuevo post y dejarlo en borrador (vista de administrador)
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario "test@test.tt" e ingresa la contraseña "1234567890a."
        Then Iniciar Sesion Exitoso

        When Hace click en el boton de new post
            And Ingresa el titulo del post 'New-Post'
            And Ingresa la descripcion del post 'Description new post'
            And Hace click en el boton de post
        Then Validar la url new posts

    Scenario: Verificar el nuevo post este en el Drafts
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario "test@test.tt" e ingresa la contraseña "1234567890a."
        Then Iniciar Sesion Exitoso
        
            When Ingresar al sitio Drafts
        Then Validar titulo del post New-Post Drafts

    Scenario: Eliminar el nuevo post
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario "test@test.tt" e ingresa la contraseña "1234567890a."
        Then Iniciar Sesion Exitoso

        Given Ingresar al sitio posts deleteshed
            When Hacer click en la lista de post delete
            And Hacer click en menu del post delete
            And Hacer click en el boton delete
            And Hacer click en el boton confirmar delete
        Then Validar la url posts delete
    
    Scenario: Verificar el nuevo post no este en el Drafts
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario "test@test.tt" e ingresa la contraseña "1234567890a."
        Then Iniciar Sesion Exitoso
        
            When Ingresar al sitio Drafts 2
        Then Validar titulo del post New-Post no este en el Drafts