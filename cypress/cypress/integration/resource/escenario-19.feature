Feature: Escenario 19: Crear Un Nuevo Post - Verificar Que No Se Vea El Tag - Crear Un Tag - Modificar El Post Con El Nuevo Tag y Verificar Que Se Vea El Tag

    Feature Crear un post verificar que no se vea el tag - crear un tag - modificar el post con el nuevo tag y Verificar Que se vea el tag
   
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

    Scenario: Verificar el nuevo tag no sea visible
        Given Ingresar al sitio home tag
            When Ingresar al sitio New-Tag eliminado
        Then Validar titulo del post New-Tag eliminado

    Scenario: Crear un nuevo tag
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario "test@test.tt" e ingresa la contraseña "1234567890a."
        Then Iniciar Sesion Exitoso

            When Hace click en el boton de tag
            And Hace click en el boton de new tag
            And Ingresa el nombre del tag 'New-Tag'
            And Ingresa la descripcion del tag 'Description new tag'
            And Hace click en el boton de save post
        Then Validar en la listas de tag el New-tag

    Scenario: Modificar el nuevo post
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario "test@test.tt" e ingresa la contraseña "1234567890a."
        Then Iniciar Sesion Exitoso

        When Ingresar al sitio posts para modificar el post
            And Hacer click en la lista de post para modificar el post
            And Hacer click en el boton menu del post
            And Selecionar el 'New-Tag'
            And Hace click en el boton para modifcar el post
            And Hace click en el boton de publish post modificado
        Then Validar la url posts modificada

    Scenario: Verificar el nuevo post publicado con el nuevo tag
        Given Ingresar al sitio
        When Hace click al post New-Post
        Then Validar la url del New-Post
        Then Validar titulo del post New-Post 

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