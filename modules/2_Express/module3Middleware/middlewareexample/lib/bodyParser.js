const bodyParser = (req) =>
  new Promise((resolve) => {
    let chunks = [];
    req.on("data", (chunk) => {
      console.log("Got chunk: ", chunk.toString());
      chunks.push(chunk);
    });
    req.on("end", () => {
      console.log("got everything!");
      resolve(Buffer.concat(chunks));
    });
  });

const parseJSON = async (req, res, next) => {
  const body = await bodyParser(req);
  const json = JSON.parse(body);
  req.body = json;
  next();
};

module.exports = parseJSON;
