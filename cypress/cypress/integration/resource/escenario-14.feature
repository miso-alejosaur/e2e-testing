Feature: Escenario 14: Crear Un Nuevo Post - Modificar su Autor - Verificar Realizando un Filtro Por el Autor Modificado

    Feature Crear un post - modifica el nombre del autor y valida mendiante un filtro el nombre del autro nuevo
   
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

    Scenario: Modificar el nombre del Autor
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario "test@test.tt" e ingresa la contraseña "1234567890a."
        Then Iniciar Sesion Exitoso

            When Ingresar al sitio de Author
            And Hacer click en la lista de autor
            And Modificar el nombre del author 'New Author 2'
            And Hacer click en el boton Save del Author
        Then Validar el nombre del Author

    Scenario: Filtrar el nuevo post publicado con el nuevo nombre del autor
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario "test@test.tt" e ingresa la contraseña "1234567890a."
        Then Iniciar Sesion Exitoso
        
        Given Ingresar al sitio del posts para realizar el filtro
            When Hace click al filtro Tag
        Then Validar titulo del post New Author 2

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