# backend_ionic_changeorg

Servidor REST en Node.js con Express y MongoDB (mayo de 2023, ciclo de DAM) para la app [ionic_changeorg](https://github.com/IkerAbad/ionic_changeorg). Ofrece el CRUD de peticiones (título y descripción) con Mongoose.

## Rutas

Todas cuelgan de `/api`:

- `POST /create-petition`: crea una petición.
- `GET /`: lista todas.
- `GET /get-petition/:id`: devuelve una.
- `PUT /update-petition/:id`: la modifica.
- `DELETE /delete-petition/:id`: la borra.

La app también llama a `/login` y `/register`, que este servidor no implementa, así que el registro y el inicio de sesión de la app no funcionan contra él.

## Cómo arrancarlo

Necesita Node y un MongoDB local.

```
npm ci
node app.js
```

Escucha en el puerto 3000 y usa la base `mongodb://127.0.0.1:27017/node_db`. Se pueden cambiar con las variables de entorno `PORT` y `MONGO_URL`.

He comprobado que las dependencias se instalan y que los ficheros pasan la comprobación de sintaxis de `node`; no lo he probado contra un MongoDB desde aquí.

## Licencia

MIT, ver [LICENSE](LICENSE).

---

# backend_ionic_changeorg (English)

A REST server in Node.js with Express and MongoDB (May 2023, DAM vocational course) for the [ionic_changeorg](https://github.com/IkerAbad/ionic_changeorg) app. It offers a CRUD for petitions (title and description) with Mongoose.

## Routes

All under `/api`:

- `POST /create-petition`: creates a petition.
- `GET /`: lists them all.
- `GET /get-petition/:id`: returns one.
- `PUT /update-petition/:id`: updates it.
- `DELETE /delete-petition/:id`: deletes it.

The app also calls `/login` and `/register`, which this server does not implement, so sign-up and login in the app do not work against it.

## Running it

It needs Node and a local MongoDB.

```
npm ci
node app.js
```

It listens on port 3000 and uses the database `mongodb://127.0.0.1:27017/node_db`. Both can be changed with the `PORT` and `MONGO_URL` environment variables.

I checked that dependencies install and that the files pass `node`'s syntax check; I have not tested it against a MongoDB from here.

## License

MIT, see [LICENSE](LICENSE).
