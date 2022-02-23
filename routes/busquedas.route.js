const {Router} = require('express');

const { buscar } = require('../controllers/busquedas.controller');

const router = Router();


router.get('/', buscar)


module.exports = router;