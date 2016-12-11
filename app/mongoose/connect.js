import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bluebird from 'bluebird';

dotenv.config({ silent: true });

mongoose.Promise = bluebird;
mongoose.connect(process.env.MONGODB_URL);

export default () => new Promise((resolve) => {
  mongoose.connection.once('open', () => {
    resolve();
  });
});
