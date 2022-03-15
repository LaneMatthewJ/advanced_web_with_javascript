const express = require("express");
const bodyParser = require("../../lib/middleware/bodyParser");
const xfilesCharacterModel = require('../../models/xfilesCharacter')

const getAllCharacter = async (req, res) => {
  try {
    const results = await xfilesCharacterModel.find()

    res.send(results);
  } catch (error) {

    console.error(error);
    res.status(500);
    res.send(error);
  }
};

// const getXfilesCharacter = async (req, res) => {
//   try {
//     const results = await xfilesCharacterModel.find({
//       lastname: req.params.lastname,
//     }).exec();

//     res.send(results);
//   } catch (error) {
//     console.error("error", error);

//     res.status(500);
//     res.send(error);
//   }
// };


// const addXfilesCharacter = async (req, res) => {
//   try {

//     console.log("Req.body ", req.body);
//     const xfilesCharacter = new XfilesCharacter(req.body);
//     const result = await xfilesCharacter.save();


//     res.send(result);
//   } catch (error) {


//     console.error(error);
//     res.status(500);
//     res.send(error);
//   }
// };


// const updateCharacter = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const character = await XfilesCharacter.findById(id).exec();
//     character.set(req.body);
//     const result = await character.save();

//     res.send(result);
//   } catch (error) {

//     console.error("error", error);
//     res.status(500);
//     res.send(error);
//   }
// };

// const removeCharacter = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const result = await XfilesCharacter.deleteOne({ _id: id }).exec();

//     res.send(result);
//   } catch (error) {

//     console.error("error", error);
//     res.status(500);
//     res.send(error);
//   }
// };

const xfilesRouter = express.Router();

xfilesRouter
  .route("/")
  .get(getAllCharacter);
  // .post(bodyParser.json(), addXfilesCharacter)

// xfilesRouter
  // .route("/:id")
  // .put(bodyParser.json(), updateCharacter)
  // .delete(removeCharacter);

// xfilesRouter.route("/:lastname").get(getXfilesCharacter);

module.exports = xfilesRouter;
