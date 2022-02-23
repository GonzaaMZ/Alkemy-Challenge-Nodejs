const {Router} = require('express');
const { crearGenero } = require('../controllers/generos.controller');


const router = Router();


router.post('/', crearGenero);

module.exports = router;