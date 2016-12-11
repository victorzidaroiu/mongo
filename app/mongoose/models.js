import mongoose from 'mongoose';

export default {
  AnimalModel: mongoose.model(
    'Animal',
    // eslint-disable-next-line
    mongoose.Schema({
      type: 'String',
    })
  ),
};
