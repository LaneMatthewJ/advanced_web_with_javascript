import axios from "axios";

export const makeAxiosCall = async () => {
  try {
    const response = await axios.get("r/awww.json");
    const posts = response.data.data.children.map(obj => obj.data.title);
    console.log("POSTS FROM AXIOS ARE", posts);
  } catch (err) {
    console.error(err);
  }
};
