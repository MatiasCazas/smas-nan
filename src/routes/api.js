const express = require('express');
const router = express.Router();
const dataController = require('../controllers/controllers');

router.get('/data', dataController.getData);
router.get('/external-data', dataController.fetchAndSaveExternalData);
router.get('/export-csv', dataController.exportDataToCSV);

module.exports = router;