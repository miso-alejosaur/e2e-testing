Feature: Escenario 5: Crear Un Nuevo Post - Verificar Su Publicación - Eliminar Post - Verificar que no sea visible

    Feature Crear un post, que este sea visible para el usuario, eliminar el post y verificar que no sea visible
   
    Scenario: Crear un nuevo post y publicar post (vista de usuario)
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario "test@test.tt" e ingresa la contraseña "1234567890a."
        Then Iniciar Sesion Exitoso

        When Hace click en el boton de new post
            And Ingresa el titulo del post 'New-Post'
            And Ingresa la descripcion del post 'Description new post'
            And Hace click en el boton de create post
            And Hace click en el boton de publish post
            And Hace click en el boton de confirm post
        Then Validar el mensaje de confirmacion

    Scenario: Verificar el nuevo post publicado
        Given Ingresar al sitio
            When Hace click al post New-Post
        Then Validar la url del New-Post
        Then Validar titulo del post New-Post

    Scenario: Eliminar el nuevo post
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario "test@test.tt" e ingresa la contraseña "1234567890a."
        Then Iniciar Sesion Exitoso

        Given Ingresar al sitio posts
            When Hacer en la lista de post
            And Hacer click en menu del post
            And Hace click en el boton delete
            And Hace click en el boton confirmar delete
        Then Validar la url posts

    Scenario: Verificar el nuevo post este eliminado
        Given Ingresar al sitio home
            When Ingresar al sitio New-Post eliminado
        Then Validar titulo del post New-Post eliminado
