import mongoose from '../mongoose';
import examples from './';

export default (insertedDocument) => {
  console.log(`${insertedDocument} was added.`);

  const type = 'dog';

  return mongoose.models.AnimalModel.find({ type });
};
