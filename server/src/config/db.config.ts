import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  const DB_URL = process.env.MONGO_URL;
  try {
    await mongoose.connect(DB_URL);
    console.log("MongoDb database is connected 🌕");
  } catch (error) {
    console.error("Error while connecting the dB", error);
    throw error;
  }
};

export default connectDB;
