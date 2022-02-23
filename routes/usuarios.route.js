const {Router} = require('express');

const { guardarUsuario } = require('../controllers/usuarios.controller');

const router = Router();

router.post('/', guardarUsuario);


module.exports = router;
