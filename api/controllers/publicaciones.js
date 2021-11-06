const { response } = require('express')

const crearPublicacion = ( req, res = response ) => {

    const publicacion = req.body

    try {
        
        res.status(201).json({
            ok: true,
            msg: 'publicacion creada',
            publicacion
        })        
        
    } catch (error) {
        console.log( error )

        return res.status(400).json({
            ok: false,
            msg: 'algo salio mal'
        })        
    }
}

module.exports = {
    crearPublicacion
}