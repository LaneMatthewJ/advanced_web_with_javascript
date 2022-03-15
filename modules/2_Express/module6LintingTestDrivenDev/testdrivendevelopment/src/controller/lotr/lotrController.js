const lotrHelper = require('./lotrHelper');

const getAllCharacters = async (req, res) => {
  try {
    const response = await lotrHelper.getAllCharacters();


    console.log('response', response);
    res.send(response);
  } catch (error) {
    console.error(error);

    res.send(error);
  }
};


module.exports = {
  getAllCharacters,
};
