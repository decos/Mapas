# Mapas

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Iniciando el proyecto de mapas

	Recursos:
		- https://angular-maps.com/
		- https://angular-maps.com/guides/getting-started/
		- https://getbootstrap.com/docs/4.0/getting-started/introduction/

1. Crear el proyecto
	- ng new mapas
	- Modificar el nombre del directorio (deseable)

2. Copiar el directorio `assets` y el archivo `styles.css` del proyecto `PeliculasApp` a nuestro nuevo proyecto

3. Añadir los scripts y hoja de estilo de Bootstrap en archivo `index` del proyecto

## Instalando angular2-google-maps y creando un API KEY de GoogleMaps

	Recursos:
		- https://angular-maps.com/guides/getting-started/
		- https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
		- https://console.developers.google.com/apis/credentials?project=mapas-1512162284246&authuser=0
		- https://angular-maps.com/api-docs/agm-core/components/AgmMap.html

1. Crear el componente `navbar`
	- ng g c components/navbar -is

2. Modificar la clase de la etiqueta `nav`
	- navbar navbar-inverse bg-inverse bg-faded

3. Instalar Angular Google Maps
	- npm install @agm/core --save

4. A través del primer recurso, hacer clic en el siguiente enlace:
	- Get an API key `here`.
	- Este enlace abrira el segundo recurso

5. A través del segundo recurso, realizar las siguientes acciones:
	- Hacer clic en el botón `Get a Key`
	- Ingresar el nombre del nuevo proyecto
	- Hacer clic en el boton `Create and Enable API`
	- Después de generarse el código, hacer clic en el enlace `API Console`
	- Este enlace abrira el tercer recurso

6. A través del tercer recurso, realizar las siguientes acciones:
	- Modificar el nombre, en mi caso puse `Angular2 Google Maps`
	- Seleccionar la opción `URLs de referencia HTTP (sitios web)` del radiobutton `Restriccion de clave`
	- Ingresar la URL `http://localhost:4200` para que acepte solicitudes de referencia HTTP

7. En el modulo de la aplicación realizar los siguientes pasos:
	- Importar el modulo `AgmCoreModule`
	- Añadir la API key creada en el punto anterior dentro de `imports`

8. Codear la clase `AppComponent`

9. Añadir lo siguiente en el archivo `styles.css`
	agm-map {
	  height: 600px;
	}

10. A través del cuarto recurso, realizar las siguientes acciones:
	- Añadir la variable `zoom` al componente `app`
	- Añadir la propiedad `zoom` al contenedor `agm-map`

## Agregando marcadores con descripciones

	Recursos:
		- https://angular-maps.com/api-docs/agm-core/components/AgmInfoWindow.html

1. Añadir el selector `agm-info-window` a la vista del componente `app`

2. Codea la vista del componente `app` para dividirla en dos partes:
	- Marcador
	- Mapa

3. Crear el directorio `services`

4. Crear el servicio `mapas`
	- ng g s services/mapas

5. Importar el servicio en el modulo principal y añadirlo en `providers`


















