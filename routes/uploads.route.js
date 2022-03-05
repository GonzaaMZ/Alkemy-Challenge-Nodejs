const {Router} = require('express');
const { check } = require('express-validator');

const { actualizarImagen, mostrarImagen } = require('../controllers/uploads.controller');
const { tablasPermitidas } = require('../helpers/db-validators');


const { validarArchivoSubir } = require('../middlewares/validar-archivo');
const { validarCampos } = require('../middlewares/validar-campo');

const router = Router();


router.put('/:tabla/:id', [
    validarArchivoSubir,
    check('tabla').custom(c => tablasPermitidas( c, ['personajes', 'peliculas'] )),
    validarCampos
], actualizarImagen ); 

router.get('/:tabla/:id', [
    check('tabla').custom(c => tablasPermitidas( c, ['personajes', 'peliculas'] )),
    validarCampos
], mostrarImagen)


module.exports = router;

