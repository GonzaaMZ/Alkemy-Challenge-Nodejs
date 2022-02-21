
const { response } = require('express');
const Usuario = require('../models/usuario');



const guardarUsuario = async (req, res = response) => {

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

module.exports = {
    guardarUsuario
}
