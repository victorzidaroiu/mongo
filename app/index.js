import examples from './examples';
import mongoose from './mongoose';

mongoose
  .connect()
  .then(examples.add)
  .then(examples.find)
  .then(examples.add)
  .then(examples.findWhere);
