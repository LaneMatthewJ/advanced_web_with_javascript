const express = require("express");
const parksAndRecCharacters = require("./parksNRec");
const parseJSON = require("../../lib/bodyParser");

const getParksAndRecCharacters = (req, res) => {
  res.send(parksAndRecCharacters);
};

const getParksAndRecCharacter = (req, res) => {
  const characterName = req.params.characterName;
  res.send({
    characterName: characterName,
    actorName: parksAndRecCharacters[characterName],
  });
};

const getMultipleCharacters = async (req, res) => {
  const response = req.body.map((characterName) => ({
    character: characterName,
    actor: parksAndRecCharacters[characterName],
  }));

  res.send(response);
};

const parksAndRecRouter = express.Router();

parksAndRecRouter
  .route("/")
  .get(getParksAndRecCharacters)
  .post(parseJSON, getMultipleCharacters);
parksAndRecRouter.get("/:characterName", getParksAndRecCharacter);

module.exports = parksAndRecRouter;
