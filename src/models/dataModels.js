const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  userId: Number,
  id: Number,
  title: String,
  body: String,
});

const DataModel = mongoose.model('Post', dataSchema);

module.exports = DataModel;
