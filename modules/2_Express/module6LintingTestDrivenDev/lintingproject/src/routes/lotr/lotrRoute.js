const express = require('express')


const apikey = 'XXXXXXXXXXXXXXX', // Insert your API KEY here!!'

const getAllMovieData = (req, res) => {
  
  
  res.send({ data: "Those movies are best" })
}

const getSpecificCharactewr = (req, res) => {
  const name = req.params.name

  axios.get(lotrurl, { header: { Bearer: apikey}})
  res.send("You chose " + name + " good choice!")
}


const lotrRoute = express.Router()

lotrRoute.route('/').get(getAllMovieData)
lotrRoute.route('/:name').get(getSpecificCharactewr)
module.exports = lotrRoute