import mongoose from '../mongoose';

export default () => new Promise((resolve) => {
  const type = 'dog';

  new mongoose.models.AnimalModel({ type }).save().then(() => {
    console.log(`${type} was added.`);
    resolve();
  });
});
