Feature: Escenario 18: Crear Un Nuevo Tag Interno - Visualizar Como Usuario

    Feature Crear un tag interno y verificar que el usuario no vea el tag interno

    Scenario: Crear un nuevo tag
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario "test@test.tt" e ingresa la contraseña "1234567890a."
        Then Iniciar Sesion Exitoso

            When Hace click en el boton de tag
            And Hace click en el boton de new tag
            And Ingresa el nombre del tag '#New-Tag'
            And Ingresa la descripcion del tag 'Description new tag'
            And Hace click en el boton de save post
        Then Validar en la listas de tag el New-tag

    Scenario: Crear un nuevo post
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario "test@test.tt" e ingresa la contraseña "1234567890a."
        Then Iniciar Sesion Exitoso

            When Hace click en el boton de new post
            And Ingresa el titulo del post 'New-Post'
            And Ingresa la descripcion del post 'Description new post'
            And Hacer click en el boton menu del post
            And Selecionar el '#New-Tag'
            And Hace click en el boton de create post
            And Hace click en el boton de publish post
            And Hace click en el boton de confirm post
        Then Validar el mensaje de confirmacion

    Scenario: Verificar el nuevo tag no sea visible
        Given Ingresar al sitio home tag
            When Ingresar al sitio New-Tag eliminado
        Then Validar titulo del post New-Tag eliminado

    Scenario: Eliminar el nuevo post
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario "test@test.tt" e ingresa la contraseña "1234567890a."
        Then Iniciar Sesion Exitoso

            Given Ingresar al sitio posts
            When Hacer click en la lista de post
            And Hacer click en menu del post
            And Hace click en el boton delete
            And Hace click en el boton confirmar delete
        Then Validar la url posts
    
    Scenario: Eliminar el nuevo tag
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario "test@test.tt" e ingresa la contraseña "1234567890a."
        Then Iniciar Sesion Exitoso

        Given Ingresar al sitio new tag
            When Hace click en el boton delete tag
            And Hace click en el boton confirmar delete
        Then Validar la url tags