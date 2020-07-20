var noteData = require("../db/db");

module.exports = function(app) {
app.get("/api/Notes", function(req, res) {
    return res.json(noteData);
  });

  // Create New Characters - takes in JSON input
app.post("/api/Notes", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newNote = req.body;

    newNote.title = newNote.text.replace(/\s+/g, "").toLowerCase();

    console.log(newNote);
  
    noteData.push(newNote);
  
    res.json(newNote);
  });
};