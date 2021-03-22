import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userModel = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  sex: { type: String, required: true },
});

export const User = mongoose.model("user", userModel);
