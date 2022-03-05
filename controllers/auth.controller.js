
const { response } = require('express');
const { Op } = require('sequelize');
const { generarJWT } = require('../helpers/generar-jwt');
const Usuario = require('../models/usuario');



//Registro de usuario
const guardarUsuario = async (req, res = response) => {

    Usuario.sync();

    const {nombre, email} = req.body;

    const data = {
        nombre,
        email
    }

    try {
        const usuario = await Usuario.create(data);    
        
        return res.status(200).json({usuario});
        
    } catch (error) {
        console.log(error)
    }

}

const login = async (req, res = response) => {

    const {nombre, email} = req.body;

    //TODO usar or para validar tambien email

    try {
        const usuario = await Usuario.findOne({
            where: {
                [Op.and]: [
                    {nombre: nombre},
                    {email: email}
                ]
                
            }
        });
        
        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario / Email no son correctos - correo'
            });
        }

        //Genero el JWT
        const token = await generarJWT(usuario.idUsuario);

        res.json({
            usuario,
            token
         })



    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Algo salio mal, habla con el administrador"
        });
    }

}



module.exports = {
    guardarUsuario,
    login
}
