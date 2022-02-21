const express = require('express');
const cors = require('cors');
const { db } = require('../db/config');

//const fileUpload = require('express-fileupload');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //TODO paths
        this.registerPath = '/auth/register';
        this.personajePath = '/characters';

        //Conexion a BD
        this.dbConnection();

        //Middlewares
        this.middlewares();

        //Rutas de la aplicacion
        this.routes();

    }

    //Funcion para conectar la BD
    async dbConnection(){
        try {
            await db.authenticate();
            console.log('Conexion a base de datos exitosa')

        } catch (error) {
            throw new Error(error);
        }
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use( express.json())
        
        //Directorio público
        this.app.use(express.static('public'));
    }



    //Routes
    routes(){
        this.app.use(this.registerPath, require('../routes/usuarios.route'));
        this.app.use(this.personajePath, require('../routes/personajes.route'));
    }



    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port)
        })

    }

}

module.exports = Server;