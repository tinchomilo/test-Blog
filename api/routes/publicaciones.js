/* 
    Rutas de publicaciones
    host + /api/publicaciones
 */

const { Router } = require('express')
const { crearPublicacion } = require('../controllers/publicaciones')

const router = Router()


router.post('/', crearPublicacion)


module.exports = router