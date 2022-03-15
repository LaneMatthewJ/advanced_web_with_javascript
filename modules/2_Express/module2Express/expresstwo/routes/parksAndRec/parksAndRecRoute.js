const bodyParser = require("../../lib/bodyParser");
const express = require("express");
const parksAndRecCharacters = require("./parksNRec");

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
  console.log("Getting body: ");

  const body = await bodyParser(req);
  const parsedBody = JSON.parse(body);

  console.log("God Body", parsedBody);

  const response = parsedBody.map((characterName) => ({
    character: characterName,
    actor: parksAndRecCharacters[characterName],
  }));

  res.send(response);
};

const parksAndRecRouter = express.Router();

parksAndRecRouter.get("/", getParksAndRecCharacters);
parksAndRecRouter.get("/:characterName", getParksAndRecCharacter);
parksAndRecRouter.post("/", getMultipleCharacters);

module.exports = parksAndRecRouter;
