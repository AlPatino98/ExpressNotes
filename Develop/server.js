// Call for express module
var express = require("express");
var path = require("path");

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port
var PORT = process.env.PORT || 7000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================

//html routes
   //Home route
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
   // API route
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });


//API routes
require("./routes/apiRoute")(app);

// =============================================================================

//Server Listener

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
