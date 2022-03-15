const mongoose = require('mongoose')

const xfilesCharacterSchema = mongoose.Schema({
  lastname: {
    type: String, 
    required: true
  }, 
  firstname: {
    type: String,
    require: true
  },
})

module.exports = mongoose.model("xfilescharaters", xfilesCharacterSchema)