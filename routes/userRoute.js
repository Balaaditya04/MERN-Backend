// import express from "express";
// import { authenticate, authorize } from "../middlewares/auth.js";
// import {
//   register,
//   login,
//   showUsers,
//   userUpdate,
//   userDelete,
// } from "../controllers/userController.js";
// const Router = express.Router();
// Router.post("/register", register);
// Router.patch("/:id", authenticate, authorize("admin"), userUpdate);
// Router.delete("/:id", authenticate, authorize("admin"), userDelete);
// Router.get("/users", authenticate, authorize("admin"), showUsers);
// Router.post("/login", login);
// export default Router;


// import express from "express";
// import User from "../models/userModel.js";

// const router = express.Router();

// router.post("/register", async (req, res) => {
//   try {
//     const newUser = new User(req.body);
//     await newUser.save();
//     res.status(201).json({ message: "User created", user: newUser });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// export default router;



import express from "express";
import { authenticate, authorize } from "../middlewares/auth.js";
const Router = express.Router();
import {
  register,
  login,
  profile,
  updateUser,
  deleteUser,
  showUsers,
  updateProfile,
  getUser,
} from "../controllers/userController.js";
Router.post("/register", register);
Router.post("/login", login);
Router.get("/", authenticate, authorize("admin"), showUsers);
Router.get("/:id", authenticate, authorize("admin"), getUser);
Router.patch("/:id", authenticate, authorize("admin"), updateUser);
Router.delete("/:id", authenticate, authorize("admin"), deleteUser);
Router.get("/:id/profile", authenticate, profile);
Router.patch("/:id/profile", authenticate, updateProfile);

export default Router;
