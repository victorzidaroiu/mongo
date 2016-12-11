import mongoose from '../mongoose';

export default async() => {
  const type = 'dog';

  mongoose.models.AnimalModel
    .find()
    .where('type').equals(type)
    .exec()
    .then((results) => {
      console.log(`${type} found ${results.length} times using where syntax.`);
    });
};
