const express = require("express");
const breads = express.Router();
const Bread = require("../models/bread.js");

// INDEX
breads.get("/", (req, res) => {
  res.render("Index", {
    breads: Bread,
    title: "Index Page",
  });
});

// SHOW
breads.get("/:arrayIndex", (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render("Show", {
      bread: Bread[req.params.arrayIndex],
    });
  } else {
    res.render("error404");
  }
});

// CREATE
breads.post("/", (req, res) => {
  if (req.body.hasGlutten === "on") {
    req.body.hasGlutten = "true";
  } else {
    req.body.hasGlutten = "false";
  }
  Bread.push(req.body);
  res.redirect("/breads");
});

module.exports = breads;
