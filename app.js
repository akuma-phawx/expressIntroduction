const express = require("express");
const app = express();
const log = console.log;
const dir = console.dir;

//all requests delt with use
// app.use((req, res) => {
//   log("Request received.");
// });

//localhost: 3030
app.listen(8080, () => {
  log("Server starting.. Listening on port 8080.");
});

// Path: /cats  => 'meow'
app.get("/cats", (req, res) => {
  log("Cats request");
  res.send("Meow!");
});
// Path: /dogs  => 'woof'
app.get("/dogs", (req, res) => {
  log("Dogs request");
  res.send("Woof!");
});
// Path: /  => 'Willkommen'
app.get("/", (req, res) => {
  log("Home request");
  res.send("Willkommen!");
});
