const express = require('express');
const parseJSON = require('../../lib/middleware/bodyParser');
const parksAndRecCharacters = require('./parksNRec');

const getParksAndRecCharacters = (req, res) => {
  console.log('MIDDLE WARE WHEN? ');
  res.send(parksAndRecCharacters);
};

const getParksAndRecCharacter = (req, res) => {
  console.log('Calling basic route');
  const { characterName } = req.params;
  res.send({
    characterName,
    actorName: parksAndRecCharacters[characterName],
  });
};

const getMultipleCharacters = async (req, res) => {
  const { body } = req;

  const response = body.map((characterName) => ({
    character: characterName,
    actor: parksAndRecCharacters[characterName],
  }));

  res.send(response);
};

const parksAndRecRouter = express.Router();

parksAndRecRouter
  .route('/')
  .get(getParksAndRecCharacters)
  .post(parseJSON.json(), getMultipleCharacters);

parksAndRecRouter.get('/:characterName', getParksAndRecCharacter);

module.exports = parksAndRecRouter;
