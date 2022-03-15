const http = require("http");
const express = require("express");

const app = express();

app.use((req, res) => {
  const method = req.method;
  const route = req.url;

  if (route === "/" && method === "GET") {
    const someObject = {
      hi: "there",
      whats: "up"
    };
    res.send(someObject);
  } else if (route === "/some-path" && method === "GET") {
    const otherObject = {
      not: "much"
    };
    res.send(otherObject);
  }
  res.end("Where were you going?");
});

const port = 3000;
app.listen(port);
console.log("Now listening on port " + port);
