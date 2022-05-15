Feature: Escenario 4: Crear Un Nuevo Post - Verificar Su Publicación - Modificar el Post y Validar Su Modificación

    Feature Crear un post, que este sea visible para el usuario, modificar el post y verificar la modificación
   
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

    Scenario: Modificar el nuevo post
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario "test@test.tt" e ingresa la contraseña "1234567890a."
        Then Iniciar Sesion Exitoso

        When Ingresar al sitio posts para modificar el post
            And Hacer click en la lista de post para modificar el post
            And Ingresa y modificar titulo del post '-Modified'
            And Hace click en el boton para modifcar el post
            And Hace click en el boton de publish post modificado
        Then Validar la url posts modificada

    Scenario: Verificar el nuevo post modificado
        Given Ingresar al sitio modificado
            When Hace click al post New-Post-Modified
        Then Validar la url del New-Post-Modified
        Then Validar titulo del post New-Post-Modified

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