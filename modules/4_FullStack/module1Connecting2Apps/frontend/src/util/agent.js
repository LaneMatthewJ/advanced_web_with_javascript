import superagent from 'superagent'
import Cookies from 'universal-cookie'

const get = async (url, query = {}, headers = {}) => {

  const cookies = new Cookies()

  // cookies.set("matt", "lane")
  const read = cookies.get("matt")


  console.log("WHAT? ", read)
  const response = await superagent.get(url)
    .query(query)
    .set({
      ...headers,
    });

    console.log("Response? ", response)
  return response;
};

const makeBodyCall = (method) => async (url, payload, query = {}, headers = {}) => {
  const response = await superagent[method](url, payload)
    .query(query)
    .set({
      'Access-Control-Allow-Origin': '*',
      ...headers, 
    });

  return response;
};


export default {
  get,
  post: makeBodyCall('post'),
  put: makeBodyCall('put'),
};
