var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blubber_app");

var User    = require("./models/User");
    Thread  = require("./models/Thread");

Thread.find({}, function(err, threads) {

  var yolo = threads[1];
  console.log(yolo.posts)

  threads.forEach(function(thread) {
    console.log(thread);
  });

  mongoose.connection.close();
});
