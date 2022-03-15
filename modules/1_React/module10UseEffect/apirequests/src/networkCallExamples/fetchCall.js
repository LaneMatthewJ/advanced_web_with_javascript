export const makeFetchCall = async () => {
  try {
    const response = await fetch(`r/awww.json`);
    const json = await response.json(); // You need to await this response.json too
    const allPosts = json.data.children.map(obj => obj.data);
    console.log("Posts FROM FETCH!!", allPosts);
  } catch (error) {
    console.error(error);
  }
};
