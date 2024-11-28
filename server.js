require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRoutes = require('./src/routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() =>{
        console.log('Conectado a MongoDB');
    }).catch((err) => console.error('Error conectando a MongoDB:', err));

// Rutas
app.use('/api', apiRoutes);

// Endpoint base para verificar si el servidor funciona
app.get('/', (req, res) => {
  res.send('API RUNNING');
});

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
