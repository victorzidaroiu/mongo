import mongoose from 'mongoose';
import _debug from 'debug';
import dotenv from 'dotenv';
import AppModel from './models/app';

dotenv.config({ silent: true });
const debug = _debug('server');
mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;
db.once('open', () => {
  AppModel.find({ name: /^Sauron/ }, (err, results) => {
    if (err) {
      throw err;
    }

    for (const app of results) {
      debug(`app found in db using find: ${app.name}.`);
    }
  });

  AppModel
    .find()
    .where('name').equals('Sauron')
    .limit(1)
    .exec((err, results) => {
      if (err) {
        throw err;
      }

      for (const app of results) {
        debug(`app found in db using where: ${app.name}.`);
      }
    });

  const sauron = new AppModel({ name: 'Sauron' });
  sauron.save();
});
