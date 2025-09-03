import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

import blogRouter from "./src/routes/blogsRoutes";
import usersRouters from "./src/routes/userRoute";

import connectToDatabase from "./src/config/connect-db";
// import connectMongo from "./src/db/mongo";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(morgan("dev"));

// app.use((req, res, next) => {
//   req.body.applicationName = "Blogging Platform";

//   console.log("Time:", Date.now());
//   next();
// });

app.use("/blogs", blogRouter);

// * users Router

app.use("/users", usersRouters);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const startServer = async () => {
  try {
    await connectToDatabase();
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
