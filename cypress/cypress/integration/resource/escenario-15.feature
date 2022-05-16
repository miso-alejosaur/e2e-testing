Feature: Escenario 15: Crear Un Nuevo Post Scheduled - Verificar que no este publicado - Publicar El Post y Verificar Su Publicación

    Feature Crear un post scheduled - verificar que no este publicado - publicar post y que este sea visible para el usuario
   
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

    Scenario: Verificar el nuevo post no este spublicado
        Given Ingresar al sitio home
            When Ingresar al sitio New-Post despublicado
        Then Validar titulo del post New-Post despublicado

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

    Scenario: Verificar el nuevo post publicado
        Given Ingresar al sitio
            When Hace click al post New-Post
        Then Validar la url del New-Post
        Then Validar titulo del post New-Post

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