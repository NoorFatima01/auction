import express from "express";
const router = express.Router();
import {
  registerUser,
  fetchAllUsers,
  fetchOneUser,
  deleteUserById,
} from "./user.controller.js";
import { validateUserRegistration } from "./user.middleware.js";

router.post("/add", validateUserRegistration(), registerUser);
router.get("/all", fetchAllUsers);
router.get("/id/:id", fetchOneUser);
router.delete("/id/:id", deleteUserById);

export default router;
