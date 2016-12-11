import mongoose from '../mongoose';

export default async(findResults) => {
  const type = 'dog';
  console.log(type);
  console.log(`    -> found ${findResults.length} times using regular syntax.`);

  mongoose.models.AnimalModel
    .find()
    .where('type').equals(type)
    .exec()
    .then((results) => {
      console.log(`    -> found ${results.length} times using where syntax.`);
    });
};
