import mongoose from "mongoose";
import dotenv from "dotenv";
import userModel from "./models/userModel.js";
import bcrypt from "bcrypt";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/lpu";

const recreateAdminUser = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    // Delete existing admin user
    await userModel.deleteOne({ email: "admin@example.com" });
    console.log("Deleted existing admin user");

    // Create new admin user
    const hashedPassword = await bcrypt.hash("admin123", 10);
    const adminUser = {
      firstName: "Admin",
      lastName: "User",
      email: "admin@example.com",
      password: hashedPassword,
      role: "admin"
    };

    const result = await userModel.create(adminUser);
    console.log("✅ Admin user recreated successfully!");
    console.log("Email: admin@example.com");
    console.log("Password: admin123");
    console.log("Role: admin");

    // Test the password
    const testUser = await userModel.findOne({ email: "admin@example.com" });
    const isMatch = await bcrypt.compare("admin123", testUser.password);
    console.log("Password test:", isMatch ? "✅ PASSED" : "❌ FAILED");

  } catch (error) {
    console.error("Error recreating admin user:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
};

// Run the function
recreateAdminUser(); 