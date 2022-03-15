const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)

const userSchema = new mongoose.Schema({
  username: {
    type:String,
    require: true, 
    unique: true
  }, 
  password: {
    type: String, 
    required: true
  }
})

module.exports = mongoose.model('usertable', userSchema)