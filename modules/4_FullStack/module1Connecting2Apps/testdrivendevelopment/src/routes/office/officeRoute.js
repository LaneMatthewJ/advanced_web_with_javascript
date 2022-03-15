const express = require('express');
const officeCharacters = require('./office');

const getOfficeCharacters = (req, res) => {
  res.send(officeCharacters);
};

const getOfficeCharacter = (req, res) => {
  const { characterName } = req.params;
  res.send({
    characterName,
    actorName: officeCharacters[characterName],
  });
};

const officeRouter = express.Router();

officeRouter.get('/', getOfficeCharacters);
officeRouter.get('/:characterName', getOfficeCharacter);

module.exports = officeRouter;
