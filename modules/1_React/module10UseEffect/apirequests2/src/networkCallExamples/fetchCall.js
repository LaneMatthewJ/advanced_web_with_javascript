export const makeFetchCall = async () => {
  try {
    const response = await fetch(`v1/character`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer  XXXXXXXXXXXXXXX', // Insert your bearer token here!!'
      }
    });
    const json = await response.json(); // You need to await this response.json too
   
    console.log("Posts FROM FETCH!!", json);
  } catch (error) {
    console.error(error);
  }
};
