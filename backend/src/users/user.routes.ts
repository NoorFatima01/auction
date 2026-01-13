import express from "express";
const router = express.Router();
import { registerUser, fetchAllUsers } from "./user.controller.js";
import { validateUserRegistration } from "./user.middleware.js";

router.post("/add" , validateUserRegistration , registerUser);
router.get("/all", fetchAllUsers )

export default router;
