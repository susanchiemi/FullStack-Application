var bodyParser = require("body-parser");
var express = require("express");

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. Use this later listener
var PORT = process.env.PORT || 3000;

// BodyParser - standard
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ROUTER
require("./app/routing/htmlRoutes.js")(app);

// LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});