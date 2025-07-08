import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use("/api/users", userRouter);

// MongoDB Connection (Cloud)
mongoose
  .connect("mongodb+srv://adityataninki:#$#$^%$$_@cluster0.5guch9n.mongodb.net/lpu?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    app.listen(8080, () => {
      console.log("Server started on port 8080");
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
