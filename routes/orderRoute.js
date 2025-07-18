import express from "express";
import { newOrder, showOrders, showAllOrders, updateOrder } from "../controllers/orderController.js";
import { authenticate, authorize } from "../middlewares/auth.js";

const Router = express.Router();

//user routes (public - users can place orders and view their own orders)
Router.post("/", newOrder);
Router.get("/:id", showOrders);

//admin routes (protected - only admins can view all orders and update order status)
Router.get("/", authenticate, authorize("admin"), showAllOrders);
Router.patch("/:id", authenticate, authorize("admin"), updateOrder);

export default Router;