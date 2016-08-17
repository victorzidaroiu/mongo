import mongoose from "mongoose";

export default mongoose.model(
  'App',
  mongoose.Schema({
    name: 'String'
  })
);
