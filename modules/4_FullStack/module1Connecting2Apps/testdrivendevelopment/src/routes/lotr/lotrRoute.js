const express = require('express');
const { getAllCharacters } = require('../../controller/lotr/lotrController');

const lotrRouter = express.Router();

lotrRouter.route('/').get(getAllCharacters);

module.exports = lotrRouter;
