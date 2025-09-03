import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

import blogRouter from "./src/routes/blogsRoutes";
import usersRouters from "./src/routes/userRoute";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(morgan("dev"));

app.use((req, res, next) => {
  req.body.applicationName = "Blogging Platform";

  console.log("Time:", Date.now());
  next();
});

app.use("/blogs", blogRouter);

// * users Router

app.use("/users", usersRouters);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

