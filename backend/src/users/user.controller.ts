import { createUser, fetchUsers, fetchUserById } from "./user.utils.js";
import { type Request, type Response } from "express";

const registerUser = async (req: Request, res: Response) => {
  const { name, email, role } = req.body;
  try {
    console.log("req received:", req.body);
    const user = await createUser(name, email, role);
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};

const fetchAllUsers = async (req: Request, res: Response) => {
  try {
    console.log("Fetching all users");
    const users = await fetchUsers();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

const fetchOneUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  if(!id){
    return res.status(400).json({ message: "Bad request. User ID is required" });
  }
  try {
    console.log(`Fetching user with id: ${id}`);
    const user = await fetchUserById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error });
  }
};

export { registerUser, fetchAllUsers, fetchOneUser };