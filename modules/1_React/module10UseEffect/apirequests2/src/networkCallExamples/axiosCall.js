import axios from "axios";

export const makeAxiosCall = async () => {
  try {
    const response = await axios.get("v1/character", {
      headers: {
        Authorization: "Bearer  XXXXXXXXXXXXXXX", // Insert your bearer token here!!"
      }
    });

    const characterData = response.data.docs.map( character => {
      return {
        height: character.height, 
        gender: character.gender, 
        birth: character.birth
      }
    })

    
    console.log("Characters from lotr via AXIOS ARE", characterData);
  } catch (err) {
    console.error(err);
  }
};
