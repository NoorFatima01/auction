import express from "express";
import connectDB from "./config/db.js";
import dotenv = require("dotenv");
import userRoutes from "./users/user.routes.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Load environment variables

// Connect to Database

app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
