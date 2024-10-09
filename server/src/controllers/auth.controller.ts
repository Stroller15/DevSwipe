import { Request, Response } from "express";
import { User } from "../models/user.model.js";

export const createUser = async (req: Request, res: Response): Promise<Response> => {
  const { firstName, lastName, email, password, age, gender } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already in use" });
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      age,
      gender,
    });
    await newUser.save();

    return res
      .status(201)
      .json({ message: "User successfully created", user: newUser });
  } catch (error) {
    console.error("Error signing up user:", error.message);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};


export const findUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const user = await User.find({
      email: req.body.email,
    });

    if (user.length === 0) {
      res.status(404).json({
        msg: "user not found",
      });
    }

    res.status(200).json({
      msg: "user found successfully",
      user,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};