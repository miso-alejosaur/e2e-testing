Feature: Escenario 16: Crear Un Nuevo Post Scheduled - Verificar que este en la lista de scheduled - Publicar El Post y Verificar que no este en la lista de scheduled

    Feature Crear un post scheduled - verificar que este en la lista de scheduled - publicar post y verificar que no este  en la lista de scheduled
   
    Scenario: Crear un nuevo post y publicar post (vista de usuario)
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario "test@test.tt" e ingresa la contraseña "1234567890a."
        Then Iniciar Sesion Exitoso

        When Hace click en el boton de new post
            And Ingresa el titulo del post 'New-Post'
            And Ingresa la descripcion del post 'Description new post'
            And Hace click en el boton de create post
            And Hace click en el boton scheduled
            And Hace click en el boton de publish post
            And Hace click en el boton de confirm post
        Then Validar el mensaje de confirmacion

    Scenario: Verificar el nuevo post este en el Scheduled
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario "test@test.tt" e ingresa la contraseña "1234567890a."
        Then Iniciar Sesion Exitoso
        
            When Ingresar al sitio Scheduled
        Then Validar titulo del post New-Post Scheduled

    Scenario: Publicar el nuevo post
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario "test@test.tt" e ingresa la contraseña "1234567890a."
        Then Iniciar Sesion Exitoso

        Given Ingresar al sitio posts
            When Hacer en la lista de post
            And And Hace click en el boton de published post
            And Hace click en el boton publish
            And Hace click en el boton de publish post
            And Hace click en el boton de confirm post
            And Hace click en el boton de confirm post 2
        Then Validar el mensaje de confirmacion publish

    Scenario: Verificar el nuevo post no este en el Scheduled
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario "test@test.tt" e ingresa la contraseña "1234567890a."
        Then Iniciar Sesion Exitoso
        
            When Ingresar al sitio Scheduled 2
        Then Validar titulo del post New-Post no este en el Scheduled

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