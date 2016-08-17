import mongoose from "mongoose";
import App from "./models/app";

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  App.find({ name: /^Sauron/ }, function(err, results) {
    if (err)
      throw err;

    for (let app of results) {
      console.log(`App found in db using find: ${app.name}.`);
    }
  });

  App
    .find()
    .where('name').equals('Sauron')
    .limit(1)
    .exec(function(err, results) {
      if (err)
        throw err;

      for (let app of results) {
        console.log(`App found in db using where: ${app.name}.`);
      }
    });

    var sauron = new App({ name: 'Sauron'});
    sauron.save();
});
