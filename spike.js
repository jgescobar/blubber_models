var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blubber_app");

var User    = require("./models/User");
    Thread  = require("./models/Thread");

// Thread.find({}, function(err, thread) {
//   console.log(thread);

//   User.findById(thread.creator, function(err, user) {
//     console.log(user);
//     mongoose.connection.close();
//   });
// });

Thread.find({}).populate("creator").exec(function(err, thread) {
  if (err) console.log(err);
  console.log(thread);
  mongoose.connection.close();
});
