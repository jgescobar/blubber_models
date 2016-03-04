var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blubber_app");

var User    = require("./models/User");
    Thread  = require("./models/Thread");

Thread.remove({}, function(err, results) {
  User.remove({}, function(err, results) {
    if (err) console.log(err);

  User.create([
    { name: "John Marshall", email: "J.Marshall@yahoo.com", moderator: true},
    { name: "Oliver Wendell Holmes Jr.", email: "O.Wendell@aol.com" },
    { name: "Thurgood Marshall", email: "ThurdaMan@mac.com" },
    { name: "Sandra Day O'Connor", email: "Sandra@daygurl.com", moderator: true}
  ], function(err, users) {
    if (err) console.log(err);
    console.log(users);

    var john = users[0];

    // create threads
    Thread.create(
      {name: "YOLO", creator: john},
      function(err, results) {
        if (err) console.log(err);
        console.log(results);

        mongoose.connection.close();
      });
    });
  });
});
