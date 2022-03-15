const agent = require('../../lib/agent');

const baseUrl = 'https://the-one-api.herokuapp.com/v1';

const getAllCharacters = async () => {
  try {
    const response = await agent.get(`${baseUrl}/character`, {}, {
      Authorization: 'Bearer XXXXXXXXXXXXXXX', // Insert your bearer token here!!',
    });

    const parsedResponseData = JSON.parse(response.text);

    const responseArray = parsedResponseData.docs || [];
    return responseArray;
  } catch (error) {
    console.error('Error in getAllChars', error);
    return [];
  }
};


const getSpecificCharacter = async (characterName) => {
  const allCharacters = await getAllCharacters();

  const specificCharacter = allCharacters.find((character) => character.name === characterName) || { message: 'No character found' };

  if (specificCharacter.message) {
    throw new Error('Nooooooooo');
  }

  return specificCharacter;
};


module.exports = {
  getAllCharacters,
  getSpecificCharacter,
};
