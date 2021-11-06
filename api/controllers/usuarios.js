const { response } = require('express')

const getUsuarios = ( req, res = response ) => {

    try {
        
        const usuraios = 'llamado a la bd y retorna usuarios'
        
        res.status(200).json({
            ok: true,
            msg: 'peticion get'
    
        })
    } catch (error) {
        console.log( error )
        return res.status(400).json({
            ok: false,
            msg: 'mensaje de error'
        })
        
    }
}

module.exports = {
    getUsuarios
}