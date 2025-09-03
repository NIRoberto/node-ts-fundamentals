import express, { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/usersControllers";

const usersRouters = Router();

usersRouters.get("/", getAllUsers);
usersRouters.get("/:id", getUserById);
usersRouters.post("/", createUser);
usersRouters.put("/:id", updateUser);
usersRouters.delete("/:id", deleteUser);

export default usersRouters;
