const parseJSON = require("../../lib/middleware/bodyParser");
const express = require("express");
const parksAndRecCharacters = require("./parksNRec");

const getParksAndRecCharacters = (req, res) => {
  console.log("MIDDLE WARE WHEN? ");
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
  const body = req.body;

  const response = body.map((characterName) => ({
    character: characterName,
    actor: parksAndRecCharacters[characterName],
  }));

  res.send(response);
};

const parksAndRecRouter = express.Router();

parksAndRecRouter
  .route("/")
  .get(getParksAndRecCharacters)
  .post(parseJSON.json(), getMultipleCharacters);

parksAndRecRouter.get("/:characterName", getParksAndRecCharacter);

module.exports = parksAndRecRouter;
