import { Request, Response } from "express";
import { User } from "../models/user.model.js";

export const signUp = async (req: Request, res: Response): Promise<any> => {
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

export const login = async (req: Request, res: Response): Promise<any> => {
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

export const jack = async (req: Request, res: Response): Promise<any> => {
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
