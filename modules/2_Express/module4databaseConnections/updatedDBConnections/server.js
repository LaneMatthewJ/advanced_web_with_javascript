const express = require("express");
const officeRouter = require("./routes/office/officeRoute");
const parksAndRecRouter = require("./routes/parksAndRec/parksAndRecRoute");
const xfilesRouter = require("./routes/xfiles/xfilesRoute");

const logger = require("./lib/middleware/logger");
const app = express();
const swaggerUI = require("swagger-ui-express");
const swaggerDoc = require("./lib/swagger");

const mongoose = require("mongoose")
const mongoURL = "mongodb://127.0.0.1:27017/xfiles";
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const dbConnection = mongoose.connection
dbConnection.on('error', err => console.error(err))
dbConnection.once('open', () => console.log("Connected to db"))


app.use(logger);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));
app.use("/office", officeRouter);
app.use("/parksAndRec", parksAndRecRouter);
app.use("/xfiles", xfilesRouter);


const port = 3000;
app.listen(port, () => console.log("Now listening on port:", port ));
console.log(`Swagger docs at localhost:${port}/api-docs`);
