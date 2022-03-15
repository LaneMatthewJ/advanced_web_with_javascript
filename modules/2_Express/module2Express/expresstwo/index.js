const express = require("express");
const officeRouter = require("./routes/office/officeRoute");
const parksAndRecRouter = require("./routes/parksAndRec/parksAndRecRoute");

const app = express();

app.use("/office", officeRouter);
app.use("/parksAndRec", parksAndRecRouter);

const port = 3000;
app.listen(port);
console.log("Now listening on port " + port);
