const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('../../lib/middleware/bodyParser');
const userModel = require('../../models/user');


const confirmUserExists = async (username) => {
  try {
    const results = await userModel.findOne({
      username,
    });

    console.log('Results? ', results);
    if (results && results.username === username) {
      return true;
    }

    console.log('Falsefhfhfhfh');
    return false;
  } catch (error) {
    throw new Error('Internal server error');
  }
};

const confirmUser = async (username, password) => {
  try {
    const results = await userModel.findOne({
      username,
    });

    console.log('results? ', results);
    if (results && (await bcrypt.compare(password, results.password))) {
      return true;
    }

    return false;
  } catch (error) {
    throw new Error('Internal server error');
  }
};

const addUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new userModel({
      username,
      password: hashedPassword,
    });
    const result = await user.save();

    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500);
    res.send(error);
  }
};

const userRouter = express.Router();

userRouter.route('/').post(bodyParser.json(), addUser);

module.exports = { userRouter, confirmUser, confirmUserExists };
