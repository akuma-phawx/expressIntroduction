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

// Path: /pkmn
app.post("/pkmn", (req, res) => {
  res.send("/pkmn post request");
});
app.get("/pkmn", (req, res) => {
  log("/pkmn get request");
  res.send("List of all pokemon:");
});

// Path: /pkdx
app.get("/pkdx", (req, res) => {
  log("/pkdx get request");
  res.send("There's a lot of generations of Pokemon! Pika!");
});

//Generations Path
app.get("/pkdx/:gen", (req, res) => {
  const { gen: generation } = req.params;
  res.send(`Browsing Generation ${generation}`);
});

//Pokemon Number
app.get("/pkdx/:gen/:number", (req, res) => {
  const { gen: generation } = req.params;
  const { number } = req.params;
  res.send(`Browsing Pokemon with number ${number} of ${generation}`);
});

// Path: /
app.get("/", (req, res) => {
  log("Home request");
  res.send("Welcome to Pokemon Tera! Go to /pkmn or /pkdx");
});

// Path: /search
app.get("/search", (req, res) => {
  log("Search request");
  const { q } = req.query; //Assuming it is called q.
  if (!q) {
    res.send("Nothing found if nothing searched ;)");
  } else {
    res.send(`Search results for pokemon ${q}`);
  }
});

// For the unknown paths : (must come at the end)
app.get("*", (req, res) => {
  res.send(`I don't know that path!`);
});
