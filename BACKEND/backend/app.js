const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Permitir solicitudes del frontend
app.use(bodyParser.json());

// Rutas
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

// Agregar rutas externas
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
