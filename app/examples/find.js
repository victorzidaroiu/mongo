import mongoose from '../mongoose';
import examples from './';

export default () => new Promise((resolve) => {
  const type = 'dog';

  mongoose.models.AnimalModel.find({ type }).then((results) => {
    console.log(`${type} found ${results.length} times using regular syntax.`);
    resolve();
  });
});
