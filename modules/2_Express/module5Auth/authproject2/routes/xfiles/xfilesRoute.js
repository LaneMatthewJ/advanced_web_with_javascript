const express = require("express");
const bodyParser = require("../../lib/middleware/bodyParser");
const xFilesCharacterModel = require('../../models/xfilesCharacter')


const getAllCharacter = async (req, res) => {
  try {
    const results = await xFilesCharacterModel.find()
    res.send(results);
  } catch (error) {
    console.error(error);
    res.status(500);
    res.send(error);
  }
};

const getXfilesCharacter = async (req, res) => {
  try {
    const results = await xFilesCharacterModel.find({
      lastname: req.params.lastname,
    }).exec();

    res.send(results);
  } catch (error) {
    console.error("error", error);
    res.status(500);
    res.send(error);
  }
};

const addXfilesCharacter = async (req, res) => {
  try {

    const xfilesCharacter = new xFilesCharacterModel({
      lastname: req.body.lastname,
      firstname: req.body.firstname
    });

    const result = await xFilesCharacterModel.save();
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500);
    res.send(error);
  }
};

const updateCharacter = async (req, res) => {
  try {
    const id = req.params.id;
    const character = await xFilesCharacterModel.findById(id)
    
    character.set(req.body);
    const result = await character.save();
    res.send(result);
  } catch (error) {
    console.error("error", error);
    res.status(500);
    res.send(error);
  }
};

const removeCharacter = async (req, res) => {
  try {
    const id = req.params.id;
    const character = await xFilesCharacterModel.findById(id)
    const result = await character.remove()
    console.log("Results? ", result)
    
    res.send(result);
  } catch (error) {

    console.error("error", error);
    res.status(500);
    res.send(error);
  }
};

const xfilesRouter = express.Router();

xfilesRouter
  .route("/")
  .post(bodyParser.json(), addXfilesCharacter)
  .get(getAllCharacter);

xfilesRouter
  .route("/:id")
  .put(bodyParser.json(), updateCharacter)
  .delete(removeCharacter);

xfilesRouter.route("/:lastname").get(getXfilesCharacter);

module.exports = xfilesRouter;
