/* Declaración de constantes del servidor */

const express = require('express');
const app = express();

/* Funcionalidades del servidor */

app.use(express.static('public'));

app.get('/mensaje', (req, res) => {
    res.send('Proyecto Node.js con Git');
})

/* Configuración del servidor */

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${PORT}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))