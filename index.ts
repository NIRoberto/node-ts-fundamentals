import express from "express";
import dotenv from "dotenv";

import connectToDatabase from "./src/config/connect-db";
// import connectMongo from "./src/db/mongo";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

console.log(PORT);

// app.get("/", (req, res) => {
//   console.log("GET / request received");

//   res.send("Hello, World!");
// });

// app.get("/posts", (req, res) => {
//   console.log("GET / request received");

//   res.send("posts data");
// });

// app.all("/about", (req, res) => {
//   console.log("GET / request received");

//   res.send("about data");
// });

let blogs = [
  {
    id: 1,
    title: "First Blog",
  },
  {
    id: 2,
    title: "Second Blog",
  },
];

app.get("/blogs", (req, res) => {
  res.json(blogs);
});

app.get("/blogs/:id", (req, res) => {
  const { id } = req.params;

  const singlePost = blogs.find((blog) => {
    return blog.id == Number(id);
  });

  if (!singlePost) {
    return res.send("Blog not found");
  }

  res.json(singlePost);
});

const startServer = async () => {
  // try {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
  // } catch (error) {
  //   console.error("❌ Failed to start server:", error);
  //   process.exit(1);
  // }
};

startServer();
