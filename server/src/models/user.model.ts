import {Schema, model} from "mongoose"
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true, 
      trim: true, 
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, 
      match: [/.+\@.+\..+/, "Please enter a valid email"], 
    },
    password: {
      type: String,
      required: true,
      minlength: 6, 
    },
    age: {
      type: Number,
      min: [0, "Age must be a positive number"], 
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"], 
      default: "Other",
    },
  },
  {
    timestamps: true, 
  }
);

export const User = model("User", userSchema)