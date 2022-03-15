const express = require("express");
const bodyParser = require("../../lib/middleware/bodyParser");
const { confirmUser } = require("./userServices");
const jsonWebToken = require("jsonwebtoken");

const tokenSignature = "xfiles_is_bestfiles";

const createToken = (userId) => {
  return jsonWebToken.sign(
    {
      userId,
    },
    tokenSignature,
    { expiresIn: "5m" }
  );
};

const createTokenRoute = async (req, res) => {
  const { username, password } = req.body;

  const userExists = await confirmUser(username, password);

  console.log("user exists", userExists);

  if (userExists) {
    const token = createToken(username);

    console.log("token?", token);
    res.status(201);
    res.send(token);
  } else {
    res.send(422);
  }
};

const tokenRouter = express.Router();

tokenRouter.post("/", bodyParser.json(), createTokenRoute);

module.exports = tokenRouter;
