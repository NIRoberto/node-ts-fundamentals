import express, { Router } from "express";

import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
} from "../controllers/blogController";

const blogRouter = Router();

blogRouter.route("/").get(getAllBlogs).post(createBlog);

// blogRouter.get("/", getAllBlogs);

blogRouter.get("/:id", getBlogById);

// blogRouter.post("/", createBlog);

blogRouter.put("/:id", updateBlog);

// blogRouter.post("/", createBlog);

blogRouter.delete("/:id", deleteBlog);

export default blogRouter;
