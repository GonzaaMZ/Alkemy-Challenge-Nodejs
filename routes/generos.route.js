const {Router} = require('express');

const { crearGenero, obtenerGeneros } = require('../controllers/generos.controller');


const router = Router();


router.get('/', obtenerGeneros)

router.post('/', crearGenero);

module.exports = router;