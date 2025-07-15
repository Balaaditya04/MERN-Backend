// // // Top-level imports
// // import express from "express";
// // import mongoose from "mongoose";
// // import dotenv from "dotenv";
// // import cors from "cors";
// // import userRouter from "./routes/userRoute.js";

// // // Load environment variables
// // dotenv.config();

// // // Create Express app (MUST come before app.use)
// // const app = express();

// // // Middlewares
// // app.use(cors());
// // app.use(express.json());
// // app.use(express.static("public"));
// // app.use("/api/users", userRouter);

// // // MongoDB connection setup
// // const dbuser = encodeURIComponent(process.env.DB_USER);
// // const dbpassword = encodeURIComponent(process.env.DB_PASSWORD);
// // const mongoURI = `mongodb+srv://${dbuser}:${dbpassword}@cluster0.5guch9n.mongodb.net/lpu?retryWrites=true&w=majority&appName=Cluster0`;
// // // const mongoURI = "mongodb://127.0.0.1:27017/lpu";

// // mongoose
// //   .connect(mongoURI)
// //   .then(() => {
// //     app.listen(8080, () => {
// //       console.log("✅ Server started on port 8080");
// //       console.log("✅ Connected to MongoDB Atlas");
// //     });
// //   })
// //   .catch((err) => {
// //     console.error("❌ MongoDB connection error:", err);
// //   });




// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import userRouter from "./routes/userRoute.js";
// import cors from "cors"
// dotenv.config();
// const app = express();
// app.use(cors())
// app.use(express.json());
// const dbuser = encodeURIComponent(process.env.DBUSER);
// const dbpass = encodeURIComponent(process.env.DBPASS);

// mongoose.connect(`mongodb://localhost:27017/lpu`).then(() => {
//   app.listen(8080, () => {
//     console.log("Server started");
//   });
// });

// // mongoose
// //   .connect(
// //     `mongodb+srv://adityataninki:Bala%402004_@cluster0.5guch9n.mongodb.net/lpu?retryWrites=true&w=majority&appName=Cluster0`
// //   )
// //   .then(() => {
// //     app.listen(8080, () => {
// //       console.log("Server started");
// //     });
// //   });

// app.use("/api/users", userRouter);











import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/Productroute.js";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const dbuser = encodeURIComponent(process.env.DBUSER);
const dbpass = encodeURIComponent(process.env.DBPASS);

mongoose.connect(`mongodb://localhost:27017/lpu`).then(() => {
  app.listen(8080, () => {
    console.log("Server started");
  });
});

// mongoose
//   .connect(
//     `mongodb+srv://${dbuser}:${dbpass}@cluster0.qjxhv.mongodb.net/merncafe?retryWrites=true&w=majority&appName=Cluster0`
//   )
//   .then(() => {
//     app.listen(8080, () => {
//       console.log("Server started");
//     });
//   });

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);