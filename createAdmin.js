import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import userModel from "./models/userModel.js";

dotenv.config();

const createAdminUser = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/lpu";
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    // Delete existing admin user
    await userModel.deleteMany({ email: "admin@example.com" });

    // Create admin user
    const hashedPassword = await bcrypt.hash("admin123", 10);
    const adminUser = {
      firstName: "Admin",
      lastName: "User",
      email: "admin@example.com",
      password: hashedPassword,
      role: "admin",
      status: "active"
    };

    const result = await userModel.create(adminUser);
    console.log("Admin user created successfully:", result.email);
    process.exit(0);
  } catch (err) {
    console.error("Error creating admin user:", err);
    process.exit(1);
  }
};

createAdminUser(); 