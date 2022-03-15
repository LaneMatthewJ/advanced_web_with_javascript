const mongoose = require('mongoose')

const xfilesCharacterSchema = mongoose.Schema({
  lastname: {
    type: String, 
    required: true,
  }, 
  firstName: {
    type: String, 
    required: true
  }
})

module.exports = mongoose.model("xfilescharaters", xfilesCharacterSchema)