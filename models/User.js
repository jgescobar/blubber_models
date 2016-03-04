var mongoose = require("mongoose");

// SCHEMA
var userSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  email:    { type: String, required: true },
  // password:  String,
  moderator: { type: Boolean, default: false }
});

// MODEL
var User = mongoose.model("User", userSchema);

module.exports = User;
