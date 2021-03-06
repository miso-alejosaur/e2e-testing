# Funcionalidades y escenarios
## Funcionalidades
- Iniciar Sesión
- Crear Post
- Editar Post
- Eliminar Post
- Ver Post
- Listar Post
- Crear Tag
- Eliminar Tag
- Filtrar mediante tags
- Editar perfil

## Escenarios de pruebas - Semana 5 (pruebas e2e):

1. Crear un post y que este sea visible para el usuario.
2. Crear un post con tag y que sea filtrable por el usuario según su tag.
3. Crear un post con tag, y buscarlo en el listado de administracion filtrando por tag.
4. Crear un post y que este sea visible para el usuario, editarlo y que el usuario vea las modificaciones.
5. Crear un post y que este sea visible para el usuario, eliminarlo y que no sea visible para el usuario.
6. Crear un post taggeado y que este sea visible para el usuario, eliminar el tag y que no sea posible filtrar por este.
7. Crear un post y que este sea visible para el usuario, despublicarlo y que el usuario no pueda verlo.
8. Crear un post y despublicarlo, revisar que este quede en la sección de drafts.
9. Crear dos post taggeados, que el usuario acceda a uno, y luego encuentre relacionado el otro mediante el tag del primero.
10. Crear un post y modificar el nombre de autor, y revisar que el usuario vea el nuevo nombre.
11. Crear un post como borrador, revisar que el usuario no lo ve, publicar el post, y confirmar desde vista usuario.
12. Crear un post como borrador, verlo en la lista de borradores, eliminarlo, ver que no esté listado.
13. Crear un post como publico, ver que no este en la lista de borradores, despublicarlo, y ver que aparezca en la lista de borradores.
14. Crear un post y modificar el nombre de autor, despues ir a lista de post, filtrar por nombre de usuario, y ver que el post esté listado.
15. Crear un post scheduled, verificar que el usuario lector no lo ve, publicarlo, y revisar que el usuario lector ya lo puede ver.
16. Crear un post scheduled, verificar que está en la lista de scheduled, publicarlo, y revisar que ya no aparece en esta lista.
17. Crear un tag interno y asignarlo a un nuevo post, filtrar por éste en el listado, y validar que un lector no lo puede utilizar, pero sí un autor.
18. Crear un tag interno y asignarlo a un nuevo post, y verificar que un lector no lo puede ver al entrar al post.
19. Crear un post sin tag, revisar que el usuario lector no vea tags en este post, agregar un tag, y revisar que el usuario lector pueda verlo.
20. Crear un post taggeado, revisar que el usuario lector pueda verlo,eliminar el tag, y revisar que el usuario lector ya no lo vea.

## Escenarios de pruebas - Semana 6 (regresión visual):
1. Crear un post y que este sea visible para el usuario. (Cypress)
2. Crear un post con tag y que sea filtrable por el usuario según su tag. (Cypress)
3. Crear un post con tag, y buscarlo en el listado de administracion filtrando por tag. (Cypress)
4. Crear un post y que este sea visible para el usuario, despublicarlo y que el usuario no pueda verlo. (Cypress)
5. Crear un post y despublicarlo, revisar que este quede en la sección de drafts. (Cypress)
6. Crear un post como borrador, verlo en la lista de borradores, eliminarlo, ver que no esté listado. (Kraken)
7. Crear un post como publico, ver que no este en la lista de borradores, despublicarlo, y ver que aparezca en la lista de borradores. (Kraken)
8. Crear un post scheduled, verificar que está en la lista de scheduled, publicarlo, y revisar que ya no aparece en esta lista. (Kraken)
9. Crear un post como borrador, revisar que el usuario no lo ve, publicar el post, y confirmar desde vista usuario. (Kraken)
10. Crear un post y modificar el nombre de autor, despues ir a lista de post, filtrar por nombre de usuario, y ver que el post esté listado. (Kraken)

# Instrucciones para ejecutar tests - Kraken

## Prerequisitos
* Tener instalado Node Version (14.17.0)

## Instalación - Versión de Ghost - Version 4.44.0
Para la creación de estos test, se usó la versión 4.44.0 de Ghost; para ejecutar esta versión, ubíquese mediante consola en el directorio donde tenga instalado Ghost, y ejecute los siguientes comandos:
```
ghost uninstall
ghost install 4.44.0 -local
```
Cuando la instalación finalice, se iniciará la ejecución de Ghost en `http://localhost:2368`, en caso que inicie en otro puerto o dirección, modifiquelo en el archivo `kraken/4.44/properties.json`, en la propiedad HOST.
## Configuración del sitio
Ingrese a la url http://localhost:2368/ghost/ (si su instancia de Ghost se ejecutó en otro puerto, úselo); allí encontrará un formulario para crear un nuevo Sitio en ghost. En los campos "Site title" y "Full name" ingrese los datos que desee, en el campo "Email Address" ingrese `test@test.tt`, y en el campo "Password" ingrese `1234567890a.`. Estas son las credenciales configuradas en Kraken; en caso de configurar otra combinación de usuario y contraseña, será necesario que modifique estos datos en el archivo `kraken/properties.json`.
![imagen](https://user-images.githubusercontent.com/98656893/167307021-8f72da03-575a-4cdc-89a5-50dcf7e8a2eb.png)

## Instalación - Versión de Ghost - Version 3.42.0
Para la creación de estos test, se usó la versión 3.42.0 de Ghost; para ejecutar esta versión, ubíquese mediante consola en el directorio donde tenga instalado Ghost, y ejecute los siguientes comandos:
```
ghost uninstall
ghost install 3.42.0 -local
```
Cuando la instalación finalice, se iniciará la ejecución de Ghost en `http://localhost:2368`; por tanto, verá error si ya se está ejecutando la otra versión de Ghost. En este caso, ejecute
```
ghost config server.port 2369
ghost start
```
Ghost se iniciará en el puerto 2369. En caso que inicie en otro puerto o dirección, modifiquelo en el archivo `kraken/3.42/properties.json`, en la propiedad HOST.

## Configuración del sitio
Ingrese a la url http://localhost:2368/ghost/#/setup (si su instancia de Ghost se ejecutó en otro puerto, úselo); allí encontrará un formulario para crear un nuevo Sitio en ghost. En los campos "Site title" y "Full name" ingrese los datos que desee, en el campo "Email Address" ingrese `test@test.tt`, y en el campo "Password" ingrese `1234567890a.`. Estas son las credenciales configuradas en Kraken; en caso de configurar otra combinación de usuario y contraseña, será necesario que modifique estos datos en el archivo `kraken/properties.json`.
![image](https://user-images.githubusercontent.com/98724802/168516188-defe3153-7ced-40d8-b50c-79936190410d.png)


## Instalación - Mediante Docker

En caso que prefiera ejecutar ghost mediante docker, siga estas instrucciones; de lo contrario, ignore esta sección.
Instalación ghost_3.42 mediante los comandos de docker:

```
docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.42 ghost:3.42
//Esto desplegará en la siguiente dirección la versión de Ghost Admin:
//Ghost 3.42
http://localhost:3001/ghost
```
Instalación ghost_4.44 mediante los comandos de docker:

```
docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.44.0 ghost:4.44.0
//Esto desplegará en la siguiente dirección la versión de Ghost Admin:
//Ghost 4.44.0
http://localhost:3002/ghost
````
Nota: para este caso debe modificar puerto y dirección en el archivo `kraken/3.42/properties.json o kraken/4.44/properties.json` según corresponda, en la propiedad HOST


## Ejecución de las pruebas y ubicación de los screenshots
Una vez creado el sitio, ubíquese mediante consola en el directorio `/kraken/3.42 o /kraken/4.44` (perteneciente a este repositorio, según corresponda), y allí ejecute el comando 
```
npm install
```
Una vez node instale todas las dependencias, ejecute el comando 
```
node_modules/kraken-node/bin/kraken-node run
```
Verá que comienza la ejecución de las pruebas en Kraken. Tras la finalización de la ejecución, verá dentro de la carpeta `screenshots`, los pantallazos tomados por Kraken para cada uno de los pasos, en cada uno de los escenarios.

## Comparación de screenshots
Para comparar los screenshots generados en los escenarios de las dos versiones, ubíquese en el directorio `/resemble_compare`r Dentro del archivo `config.json` asegúrese que los valores de `v3Directory` y `v4Directory` coincidan con la ubicación de los screenshots que desea comparar (por defecto apuntan a la ubicación de los pantallazos generados por kraken para las dos versiones de ghost usadas); si no coinciden, modifíquelos para que sean coincidentes. Tras esto, ejecute en consola en consola los comandos:

``` 
npm install
node index.js
```
Esto ejecutará resemble, y creará un reporte con las diferencias encontradas entre los pantallazos dentro de la carpeta results, en un subdirectorio creado según la fecha y hora de ejecución. Dentro del repositorio podrá encontrar el último reporte generado por el equipo tras ejecutar las pruebas (`resemble_comparer/results/2022-05-16T04.15.18.653Z/report.html`).

![imagen](https://user-images.githubusercontent.com/98656893/168519574-3bac86ae-cc2f-40cd-86a0-e14a0fb18aec.png)

# Instrucciones para ejecutar tests - Cypress

[Intrucciones para ejecución con Cypress](https://github.com/miso-alejosaur/e2e-testing/wiki/Instrucciones-VRT-con-Cypress-y-Resemble.js)

## Instalación - Versión de Ghost
Para la creación de estos test, se usó la versión 4.42.0 de Ghost; para ejecutar esta versión, ubíquese mediante consola en el directorio donde tenga instalado Ghost, y ejecute los siguientes comandos:
```
ghost uninstall
ghost install 4.42.0 -local
```
Cuando la instalación finalice, se iniciará la ejecución de Ghost en `http://localhost:2368`, en caso que inicie en otro puerto o dirección, modifiquelo en el archivo `kraken/3.42/properties.json o kraken/4.44/properties.json` según corresponda, en la propiedad HOST.
## Configuración del sitio
Ingrese a la url http://localhost:2368/ghost/ (si su instancia de Ghost se ejecutó en otro puerto, úselo); allí encontrará un formulario para crear un nuevo Sitio en ghost. En los campos "Site title" y "Full name" ingrese los datos que desee, en el campo "Email Address" ingrese `test@test.tt`, y en el campo "Password" ingrese `1234567890a.`. Estas son las credenciales configuradas en Cypress; en caso de configurar otra combinación de usuario y contraseña, será necesario que modifique estos datos en el archivo `/Cypress/cypress/resource/login.feature`.
![imagen](https://user-images.githubusercontent.com/98656893/167307021-8f72da03-575a-4cdc-89a5-50dcf7e8a2eb.png)
## Ejecución de las pruebas
Una vez creado el sitio, ubíquese mediante consola en el directorio `/Cypress` (perteneciente a este repositorio), y allí ejecute el comando 
```
npm install
```
Una vez npm instale todas las dependencias, ejecute el comando 

```
npm run test
```
Verá que comienza la ejecución de las pruebas en Cypress.
## Ubicación de los screenshots

```
e2e-testing/cypress/cypress/screenshots/resource
```

## Miembros del equipo
- Alejandro Santamaría Pérez (a.santamaria11@uniandes.edu.co)
- Andrés Javier Oviedo Morales (a.oviedom@uniandes.edu.co)
- Steve Andersson Rojas Hernández (s.rojash@uniandes.edu.co)
- Washington Roberto Parra Vásquez (w.parrav@uniandes.edu.co)
