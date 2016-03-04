var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blubber_app");

var User    = require("./models/User");
    Thread  = require("./models/Thread");

Thread.remove({}, function(err, results) {
 if (err) console.log(err);

 User.remove({}, function(err, results) {
    if (err) console.log(err);

  User.create([
    { name: "John Marshall", email: "J.Marshall@yahoo.com", moderator: true},
    { name: "Oliver Wendell Holmes Jr.", email: "O.Wendell@aol.com" },
    { name: "Thurgood Marshall", email: "ThurdaMan@mac.com" },
    { name: "Sandra Day O'Connor", email: "Sandra@daygurl.com", moderator: true}
  ], function(err, users) {
    if (err) console.log(err);
    // console.log(users);

    var john = users[0];
    var thur = users[2];

    // create threads
    Thread.create([
      {
        name: "YOLO",
        creator: john,
        creatorName: john.name
    },
      {
        name:     "Think Different",
        creator: thur,
        creatorName: thur.name
      }
    ],
      function(err, threads) {
        if (err) console.log(err);
        // console.log(thread);

        // add some posts
        var yolo = threads[0];

        yolo.posts.push({
          author: john,
          title:  "Marbury vs. Madison",
          body:   "Ya diggg?"
        });
        yolo.posts.push({
          author: thur,
          title:  "Brown v BoE",
          body:   "Right, Yeah."
        });

        yolo.save(function(err, yolo) {
         // console.log(err);
         // console.log(yolo);

          var post = yolo.posts[0];

          post.comments.push({
            author: thur,
            body:  "Pics or it didnt's happen."
          });

          yolo.save(function(err, results) {
            console.log(err);
            console.log(results)
            mongoose.connection.close();
          });
        });
      });
    });
  });
});
