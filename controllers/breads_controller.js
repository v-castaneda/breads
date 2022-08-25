const express = require("express");
const breads = express.Router();
const Bread = require("../models/bread.js");
const Baker = require('../models/baker.js')

// INDEX
breads.get("/", (req, res) => {
  Bread.find().then((foundBreads) => {
    res.render("Index", {
      breads: foundBreads,
      title: "Index Page",
    });
  });
});

// NEW
breads.get("/new", (req, res) => {
  Baker.find()
       .then(foundBakers => {
        res.render('new', {
          bakers: foundBakers
        })
       })
});

// DELETE
breads.delete("/:indexArray", (req, res) => {
  Bread.findByIdAndDelete(req.params.indexArray)
  .then(deleteBread => {
    console.log(deleteBread)
    res.status(303).redirect("/breads");
  })
});

// EDIT
breads.get('/:indexArray/edit', (req, res) => {
  Baker.find()
    .then(foundBakers => {
        Bread.findById(req.params.indexArray)
          .then(foundBread => {
            res.render('edit', {
                bread: foundBread, 
                bakers: foundBakers 
            })
          })
    })
})

// SHOW
breads.get("/:indexArray", (req, res) => {
  Bread.findById(req.params.indexArray)
    .populate('baker')
    .then((foundBread) => {
      const bakedBy = foundBread.getBakedBy()
      console.log(bakedBy)
      res.render("show", {
        bread: foundBread,
      });
    })
    .catch((err) => {
      res.send("404");
    });
});

// CREATE
breads.post("/", (req, res) => {
  console.log(req.body);
  if (!req.body.image) {
    req.body.image = undefined;
  }
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = true;
  } else {
    req.body.hasGluten = false;
  }
  console.log(req.body);
  Bread.create(req.body);
  res.redirect("/breads");
});

// UPDATE
breads.put("/:indexArray", (req, res) => {
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = true;
  } else {
    req.body.hasGluten = false;
  }
  Bread.findByIdAndUpdate(req.params.indexArray, req.body, {new: true})
  .then(updatedBread => {
    console.log(updatedBread)
    res.redirect(`/breads/${req.params.indexArray}`);
  })
});

module.exports = breads;
