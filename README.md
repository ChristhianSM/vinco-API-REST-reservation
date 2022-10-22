# Vinco VincoReservation - API con Node, express y MongoDb

API, desarrollada usando Nodejs y MongoDB con el objetivo de Obtener, crear, modificar, eliminar Hoteles del Perù.

### Documentación de la Api
* https://documenter.getpostman.com/view/13410793/2s84DrS31u

### 1. API

La API expone los siguientes endpoints:

### `/api`

#### USERS

##### Obtener todos los usuarios --  Se necesita ser Administrador
* `GET /users`

##### Obtener un determinado usuario
* `GET /users/:id`

##### Actualizar un determinado Usuario -- Se necesita estar autenticado
* `PATCH /users/:id`

##### Eliminar una determinada Habitacion -- Se necesita estar autenticado
* `DELETE /users/:id`

#### AUTHENTICATION

##### Crear un usuario
* `POST /auth/register`

##### Loguearse
* `POST /auth/login`

#### HOTELS

##### Obtener la cantidad de hoteles por ciudad
* `GET hotels/countByCity`

##### Obtener la cantidad de hoteles por tipo ejemplo(Hoteles, Apartamentos, Villas, etc )
* `GET hotels/countByType`

##### Obtener todas las habitaciones de un determinado Hotel
* `GET hotels/rooms/:id`

##### Obtener todos los hoteles
* `GET /hotels`

##### Obtener un determinado Hotel
* `GET /hotels/:id`

##### Crear un Hotel -- Se necesita ser Administrador
* `POST /hotels`

##### Actualizar un determinado Hotel -- Se necesita ser Administrador
* `PATCH /hotels/:id`

##### Eliminar un determinado Hotel -- Se necesita ser Administrador
* `DELETE /hotels/:id`

#### ROOMS

##### Obtener todas las habitaciones
* `GET /rooms`

##### Obtener una determinada habitacion
* `GET /rooms/:id`

##### Crear una habitacion de un determinado hotel -- Se necesita ser Administrador
* `POST /rooms/:idHotel`

##### Actualizar una determinada habitacion de acuerdo a sus fechas -- Se necesita ser Administrador
* `PATCH /rooms/availability/:id`

##### Eliminar una determinada Habitacion -- Se necesita ser Administrador
* `DELETE /rooms/:idHotel/:id`

## 2. Objetivos Logrados

Los objetivos que se lograron fueron adquirir experiencia con **Node.js**
como herramienta para desarrollar _aplicaciones de servidor_, junto con una
serie de herramientas comunes usadas en este tipo de contexto (Express como
framework y MONGODB como base datos.

### Node

* [ ] Instalar y usar modules
* [ ] `npm scripts`
* [ ] Variables de entorno

### Express

* [ ] Rutas
* [ ] Cookies
* [ ] JWT
* [ ] `middlewares`

### HTTP

* [ ] Request
* [ ] Response
* [ ] Headers
* [ ] Body
* [ ] Verbos HTTP
* [ ] Codigos de status de HTTP
* [ ] Encodings y `JSON`
* [ ] CORS

### MONGO

* [ ] Instalación
* [ ] Conexión a través de cliente
* [ ] Connection string
* [ ] Comandos/Queries de creacion, lectura, modificación y eliminación
* [ ] Modelos

### Buenas prácticas de desarrollo

* [ ] Modularización
* [ ] Nomenclatura / Semántica