// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
  nome: String,
  password: String,
});

module.exports = mongoose.model("SomeModel", userSchema)
