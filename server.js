// DEPENDENCIES
const express = require("express");
const breads = require("./controllers/breads_controller");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to an Awesome App about Breads!");
});

// BREADS
const breadsController = require("./controllers/breads_controller.js");
app.use("/breads", breadsController);

// LISTEN
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
