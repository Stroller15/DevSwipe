import express, { Application, NextFunction, Request, Response, urlencoded } from "express";
import { User } from "./models/user.model.js";
import { create } from "domain";

const app: Application = express();

// * default middleware
app.use(express.json());


// * Custom middleware

// * Routes
import authRouter from "./routes/auth.route.js"
app.use("/api/auth", authRouter);





export default app;
