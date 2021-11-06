const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config')
const cors = require('cors')

const app = express();

dbConnection();

app.use(cors())
app.use( express.json() )


// rutas de login de usuarios
app.use( '/api/usuarios', require('./routes/usuarios') )

// rutas de posteos de usuarios
app.use( '/api/publicaciones', require('./routes/publicaciones') )


app.listen(process.env.PORT, () => {
    console.log( `Servidor corriendo en el puerto ${ process.env.PORT }` )
})








