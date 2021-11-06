const { Schema, model } = require('mongoose')

const PublicacionSchema = Schema({   
    texto: {
        type: String,
        required: false
    },    
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});

EventoSchema.method('toJSON', function() {
    const { __v, _id, ...object} = this.toObject();
    object.id = _id;
    return object
})

module.exports = model('Publicacion', PublicacionSchema)