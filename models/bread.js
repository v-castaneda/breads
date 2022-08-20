// require mongoose
const mongoose = require("mongoose");

// creating shorthand for the Schema constructor
const { Schema } = mongoose;

// define schema
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: "https://placekitten.com/300/300" },
});

// create Bread model in schema
const Bread = mongoose.model("Bread", breadSchema);

// export to use in controller
module.exports = Bread;
