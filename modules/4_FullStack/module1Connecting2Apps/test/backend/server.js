const express = require('express');

const app = express()

app.use( (req,res) => {

  if (req.url === "/thing" ){
    console.log("REQUEST? thing")
    res.send("STUFF")
  } else if (req.url === "/stuff") {
    res.send("OTHER")
  }

})


const port = 5000;
app.listen(port, () => console.log('Now listening on port:', port));
console.log(`Swagger docs at localhost:${port}/api-docs`);
