const { getAllCharacters, getSpecificCharacter } = require('../../../src/controller/lotr/lotrHelper');
const characterResponseData = require('./data/characterData.json');

jest.mock('../../../src/lib/agent');
const agent = require('../../../src/lib/agent');


describe('Lotr Helper Functions', () => {
  beforeEach(() => {
    console.log('Running a test! ');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('get all characters ', () => {
    it('makes call to the one api and returns all character data', async () => {
      agent.get.mockResolvedValue(characterResponseData);
      const expected = JSON.parse(characterResponseData.text).docs;

      const actualResponse = await getAllCharacters();

      expect(actualResponse).toEqual(expected);
    });

    it('throws and error and returns empty array', async () => {
      agent.get.mockRejectedValue({ message: "You don't have an api key!" });

      const actualResponse = await getAllCharacters();

      expect(actualResponse).toEqual([]);
    });
  });

  describe(' get specific character', () => {
    it('when supplied with an existing character name, it returns character data ', async () => {
      agent.get.mockResolvedValue(characterResponseData);
      const expected = {
        _id: '5cd99d4bde30eff6ebccfd85', height: '', race: 'Human', gender: 'Female', birth: 'SA 532', spouse: '', death: '', realm: '', hair: '', name: 'Isilmë', wikiUrl: 'http://lotr.wikia.com//wiki/Isilm%C3%AB',
      };

      const actualResponse = await getSpecificCharacter(expected.name);

      expect(actualResponse).toEqual(expected);
    });

    it('throws an error if character doesnt exist', async () => {
      agent.get.mockResolvedValue(characterResponseData);

      try {
        await getSpecificCharacter();
      } catch (error) {
        console.error(error);
        expect(error.message).toEqual('Nooooooooo');
      }
    });
  });
});
