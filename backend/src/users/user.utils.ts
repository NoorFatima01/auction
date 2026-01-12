import mongoose from "mongoose";
import { UserModel } from "./user.model.js";

const createUser = async (
  name: string,
  email: string,
  role: "buyer" | "seller"
) => {
  const user = new UserModel({ name, email, role });
  return await user.save();
};

const fetchUsers = async () => {
  const users = await UserModel.find();
  return users;
};

const fetchUserById = async (id: string) => {
    const user = await UserModel.findById(id);
    return user;
}

export { createUser, fetchUsers, fetchUserById };
