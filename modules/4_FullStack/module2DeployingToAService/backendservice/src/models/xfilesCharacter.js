const mongoose = require('mongoose');

const xfilesCharacterSchema = mongoose.Schema({
  lastname: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('xfilescharaters', xfilesCharacterSchema);
