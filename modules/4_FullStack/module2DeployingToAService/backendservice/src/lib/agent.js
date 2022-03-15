const superagent = require('superagent');


const get = async (url, query = {}, headers = {}) => {
  const response = await superagent.get(url)
    .query(query)
    .set(headers);

  return response;
};

const makeBodyCall = (method) => async (url, payload, query = {}, headers = {}) => {
  const response = await superagent[method](url, payload)
    .query(query)
    .set(headers);

  return response;
};


module.exports = {
  get,
  post: makeBodyCall('post'),
  put: makeBodyCall('put'),
};
