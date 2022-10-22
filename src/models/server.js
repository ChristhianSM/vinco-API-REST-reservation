import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import { dbConnection } from '../database/config.js';
import authRouter from '../routes/auth.routes.js'
import userRouter from '../routes/user.routes.js'
import roomsRouter from '../routes/rooms.routes.js'
import hotelsRouter from '../routes/hotels.routes.js'
import { personalizeError } from '../middlewares/error.js';

class Server {

  constructor() {
    this.app  = express();
    this.port = process.env.PORT;

    this.paths = {
      auth:   '/api/auth',
      users:  '/api/users',
      rooms:  '/api/rooms',
      hotels: '/api/hotels'
    }


    // Conectar a base de datos
    this.conectarDB();

    // Middlewares
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {

    // CORS
    this.app.use( cors() );

    // Lectura y parseo del body
    this.app.use( express.json() );

    // Directorio Público
    this.app.use( express.static('public') );

    // Cookie Parser
    this.app.use( cookieParser() );

  }

  routes() {
    this.app.use( this.paths.auth, authRouter);
    this.app.use( this.paths.users, userRouter);
    this.app.use( this.paths.rooms, roomsRouter);
    this.app.use( this.paths.hotels, hotelsRouter);

    this.app.use( personalizeError );
  }

  listen() {
    this.app.listen( this.port, () => {
        console.log('Servidor corriendo en puerto', this.port );
    });
  }
}

export default Server;
