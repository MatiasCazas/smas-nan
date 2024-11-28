const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const DataModel = require('../models/dataModels');
const axios = require('axios');
const fs = require('fs'); // Importar fs

exports.getData = async (req, res) => {
    const data = await DataModel.find();
    res.json(data);
};

exports.fetchAndSaveExternalData = async (req, res) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    await DataModel.insertMany(response.data);
    res.json({ message: 'Datos guardados' });
};

exports.exportDataToCSV = async (req, res) => {
    try {
        // Obtener los datos desde MongoDB
        const data = await DataModel.find();
    
        // Si no hay datos, responde con un mensaje
        if (!data || data.length === 0) {
          return res.status(404).send('No hay datos disponibles para exportar.');
        }
    
        // Definir las columnas del CSV según la estructura de tus datos
        const csvWriter = createCsvWriter({
          path: 'data.csv', // Archivo temporal en el servidor
          header: [
            { id: 'userId', title: 'User ID' },
            { id: 'id', title: 'ID' },
            { id: 'title', title: 'Title' },
            { id: 'body', title: 'Body' },
          ],
        });
    
        // Escribir los datos en el archivo CSV
        await csvWriter.writeRecords(data);
    
        // Configurar la respuesta para que el cliente descargue el archivo CSV
        res.download('data.csv', 'data.csv', (err) => {
          if (err) {
            console.error('Error al descargar el archivo:', err);
            res.status(500).send('Error al descargar el archivo');
          }
    
          // Eliminar el archivo temporal después de la descarga
          fs.unlinkSync('data.csv');
        });
      } catch (error) {
        console.error('Error al exportar CSV:', error);
        res.status(500).send('Error al generar el archivo CSV');
      }
};
