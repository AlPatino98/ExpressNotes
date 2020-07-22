var noteData = require("../db/db.json");
var fs = require("fs");
var util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

module.exports = function(app) {
app.get("/api/notes", function(req, res) {
 return readFileAsync("../db/db.json", "utf8")
  .then(note => {
    console.log(note)
     res.json(note)
 })
  .catch(err => console.log(err)) 
  
  });

  // Create New Characters - takes in JSON input
app.post("/api/notes", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newNote = req.body;

    newNote.title = newNote.text.replace(/\s+/g, "").toLowerCase();

    console.log(newNote);
  
    noteData.push(newNote);
  
    res.json(newNote);
  });
};