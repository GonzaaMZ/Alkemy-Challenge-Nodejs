const path = require('path');
const  fs = require('fs');

const { response } = require("express");
const { subirArchivo } = require("../helpers/subir-archivo");
const Personaje = require('../models/personaje');
const Pelicula = require('../models/pelicula');


const cargarArchivo = async (req ,res = response) => {

    try {
        //Enviando los datos hacia la funcion (subirArchivo) para procesar el archivo
        const nombre = await subirArchivo(req.files, undefined );
        res.json({nombre});
        
    } catch (msg) {
        res.status(400).json({msg});        
    }
}


const actualizarImagen = async (req ,res = response) => {

    const {id, tabla} = req.params;

    let modelo;

  

    //Enviando los datos hacia la funcion (subirArchivo) para procesar el archivo
    const nombre = await subirArchivo(req.files, undefined , tabla);
    
    //Asigno el archivo img en este caso al modelo
   // modelo.img = nombre;

    //Preparo el modelo a guardar segun la coleccion recibida (pelicula o personaje)
    switch(tabla){
        case 'personajes':
            modelo = await  Personaje.update({img: nombre},{
                where: {
                    idPersonaje: id
                }
            });
            if(!modelo){
                return res.status(400).json({msg: `No existe un usuario con el id ${id}`
            });
            }
            break;

        case 'peliculas':
            modelo = await Pelicula.findByPk(id);
            if(!modelo){
                return res.status(400).json({msg: `No existe un producto con el id ${id}`
            });
            }
            break;
        
        default:
            return res.status(500).json({
                msg: 'Opción no validada'
            })

    }

    //Limpiar imagenes repetidas y anteriores
    if (modelo.img){
        //Tomo la ruta de la imagen
        const pathImagen = path.join(__dirname, '../uploads', tabla, modelo.img);
        //Compruebo si existe la imagen
        if (fs.existsSync(pathImagen) ){
            fs.unlinkSync(pathImagen); //Si existe, la elimino
        }
    }


    //Respuesta de mi server
    res.json(modelo);

}


const mostrarImagen = async (req, res = response) => {

    const {id, coleccion} = req.params;

    let modelo;

    //Preparo el modelo a guardar segun la coleccion recibida (usuario o producto)
    switch(coleccion){
        case 'usuarios':
            modelo = await Usuario.findById(id);
            if(!modelo){
                return res.status(400).json({msg: `No existe un usuario con el id ${id}`
            });
            }
            break;

        case 'productos':
            modelo = await Producto.findById(id);
            if(!modelo){
                return res.status(400).json({msg: `No existe un producto con el id ${id}`})
            }
            break;
        
        default:
            return res.status(500).json({
                msg: 'Opción no validada'
            })

    }

    if (modelo.img){
        //Tomo la ruta de la imagen
        const pathImagen = path.join(__dirname, '../uploads', coleccion, modelo.img);
        //Compruebo si existe la imagen
        if (fs.existsSync(pathImagen) ){
            return res.sendFile(pathImagen)
        }
        
    }
    const pathNoImage = path.join(__dirname, '../assets/no-image.jpg');
     return res.sendFile(pathNoImage);
    
}


module.exports = {
    cargarArchivo,
    actualizarImagen,
    mostrarImagen,
}