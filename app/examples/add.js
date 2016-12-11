import mongoose from '../mongoose';

export default () => new mongoose.models.AnimalModel({ type: 'dog' }).save();
