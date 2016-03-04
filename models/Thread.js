var mongoose = require("mongoose");

var threadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  creator: mongoose.Schema.Types.ObjectId
});

var Thread = mongoose.model(
  "Thread",
  threadSchema
);

module.exports = Thread;
