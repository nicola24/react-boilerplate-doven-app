const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/dovenmuehle',
  { useNewUrlParser: true },
);

const appStringSchema = new mongoose.Schema({
  description: { type: String, required: true },
});

const StringApp = mongoose.model('StringApp', appStringSchema);

// find all strings
const getAllStrings = () => StringApp.find();

// create one string
const createString = str => StringApp.create(str);

module.exports = {
  getAllStrings,
  createString,
};
