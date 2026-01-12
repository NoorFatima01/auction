import mongoose from "mongoose";

const User = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ["buyer", "seller"], required: true },

});

export const UserModel = mongoose.model("User", User);