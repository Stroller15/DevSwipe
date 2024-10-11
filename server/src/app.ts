import express, { Express } from "express";

const app: Express = express();

// * default middleware
app.use(express.json());

// * Custom middleware

// * Routes
import authRouter from "./routes/auth.route.js";
app.use("/api/auth", authRouter);

export default app;
