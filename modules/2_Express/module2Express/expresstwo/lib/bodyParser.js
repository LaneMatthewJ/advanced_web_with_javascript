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

module.exports = bodyParser;
