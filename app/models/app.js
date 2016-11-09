import mongoose from 'mongoose';

export default mongoose.model(
  'App',
  // eslint-disable-next-line
  mongoose.Schema({
    name: 'String',
  })
);
