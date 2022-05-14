Feature: Escenario 6: Crear Un Nuevo Tag - Crear Post Con Tag - Filtrar Segun su Tag como usuario - Eliminar Tag y Post - Verificar Que Estos No Esten Visibles

    Feature Crear un tag - flitrar por tag visible para el usuario - eliminar tag y post  verificar que este no este creado
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

    Scenario: Crear un nuevo post
        Given Ingresa a la pagina de inicio de sesion
            When Ingresa el nombre de usuario "test@test.tt" e ingresa la contraseña "1234567890a."
        Then Iniciar Sesion Exitoso

            When Hace click en el boton de new post
            And Ingresa el titulo del post 'New-Post'
            And Ingresa la descripcion del post 'Description new post'
            And Hacer click en el boton menu del post
            And Selecionar el 'New-Tag'
            And Hace click en el boton de create post
            And Hace click en el boton de publish post
            And Hace click en el boton de confirm post
        Then Validar el mensaje de confirmacion
        
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

    Scenario: Verificar el nuevo post este eliminado
        Given Ingresar al sitio home
            When Ingresar al sitio New-Post eliminado
        Then Validar titulo del post New-Post eliminado

    Scenario: Verificar el nuevo tag este eliminado
        Given Ingresar al sitio home tag
            When Ingresar al sitio New-Tag eliminado
        Then Validar titulo del post New-Tag eliminado