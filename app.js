const express = require("express");
const app = express();

//all requests delt with use
app.use(() => {
  console.log("we got your request");
});

//localhost: 3030
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
