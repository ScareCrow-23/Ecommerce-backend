import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";
import mongoose from "mongoose";
import { connectDB } from "./utils/features.js";

dotenv.config();

// Connecting Database

connectDB();
// mongoose
//   .connect(
//
//   )
//   .then(() => {
//     console.log("MongoDb is connected!");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Importing Routes

const port = 4000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is working");
});

// Using Routes
app.use("/api/v1/user", userRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
