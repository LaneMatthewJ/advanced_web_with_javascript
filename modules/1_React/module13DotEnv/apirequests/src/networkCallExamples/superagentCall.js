import superagent from "superagent";

// done in a try catch format!
export const makeSuperAgentCall = async () => {
  try {
    const response = await superagent.get("r/awww.json");
    const responseData = JSON.parse(response.text);
    const posts = responseData.data.children.map(obj => obj.data.title);
    console.log("Titles FROM SUPER AGENT are: ", posts);
  } catch (err) {
    console.error(err);
  }
};
