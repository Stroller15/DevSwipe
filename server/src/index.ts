import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/db.config.js";

dotenv.config();
const port = process.env.PORT || 8001;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port} 🔴`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed", error);
    process.exit(1);
  });
