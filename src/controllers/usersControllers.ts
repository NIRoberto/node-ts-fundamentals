import express, { Request, Response } from "express";
// import { User } from "../model/user";
import { UserModel } from "../model/userModel";



async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await UserModel.find();
    res.json({
      status: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

async function getUserById(req: Request, res: Response) {
  res.send(`Get user with id ${req.params.id}`);
}

async function createUser(req: Request, res: Response) {
  try {
    const newUser = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };

    const createdUser = await UserModel.create(newUser);

    res.status(201).json({
      status: "success",
      data: {
        user: createdUser,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

async function updateUser(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const updateData = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };

    const findUserToUpdate = await UserModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true } // return the updated document
    );

    if (!findUserToUpdate) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    res.json({
      status: "success",
      data: {
        user: findUserToUpdate,
      },
    });
  } catch (error) {}
}

async function deleteUser(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const deletedUser = await UserModel.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }
    return res.json({
      status: "success",
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log(error);
  }
}

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
