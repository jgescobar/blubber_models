var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blubber_app");

// SCHEMA
var userSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  email:    { type: String, required: true },
  // password:  String,
  moderator: { type: Boolean, default: false }
});

// MODEL
var User = mongoose.model("User", userSchema);

User.remove({}, function(err, results) {
  User.create([
    { name: "John Marshall", email: "J.Marshall@yahoo.com", moderator: true},
    { name: "Oliver Wendell Holmes Jr.", email: "O.Wendell@aol.com" },
    { name: "Thurgood Marshall", email: "ThurdaMan@mac.com" },
    { name: "Sandra Day O'Connor", email: "Sandra@daygurl.com", moderator: true}
  ], function(err, results) {
    if (err) console.log(err);

    console.log(results);
    mongoose.connection.close();
  });
});


mongoose.connection.close();
