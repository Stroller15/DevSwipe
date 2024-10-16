
import {Schema, model} from "mongoose"

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minLength: [3, "firstname should be atleast 3 character..."],
      maxLength: [50, "firstname should not be more than 50 character..."],
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      maxLength: [50, "firstname should not be more than 50 character..."],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "this is required field"],
      unique: true,
      lowercase: true,
      match: [/.+\@.+\..+/, "Please enter a valid email"],
    },
    password: {
      type: String,
      trim: true,
      required: true,
      minlength: 6,
    },
    age: {
      type: Number,
      trim: true,
      min: [10, "Age must be more than 10 year"],
    },
    gender: {
      type: String,
      trim: true,
      enum: ["male", "female", "other"],
      default: "other",
    },
    photoUrl: {
      type: String,
      default:
        "https://www.pikpng.com/pngl/m/80-805068_my-profile-icon-blank-profile-picture-circle-clipart.png",
    },
    about: {
      trim: true,
      type: String,
    },
    skills: {
      trim: true,
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

export const User = model("User", userSchema)