import express, { Application, NextFunction, Request, Response, urlencoded } from "express";
import { User } from "./models/user.model.js";
import { create } from "domain";

const app: Application = express();

// * default middleware
app.use(express.json());


// * Custom middleware

// * Routes
app.get("/", (req: Request, res: Response) => {
  throw new Error("error is coming");
  res.send("Everything is set don't worry");
});

app.use("/", (err:any, req: any, res: any, next:any) => {
  if(err) {
    res.status(500).send("something went wrong");
  }
})

app.use("/hello/2", (req, res) => {
  res.send("hellow meoww");
});

app.use("/hello", (req, res) =>{
  res.send("hellow hellow")
})

app.post("/addUser", async (req: Request, res: Response) => {
  try {
    const {firstName, lastName, email, password, age, gender } = req.body;
    const user =  User.create({
      firstName,
      lastName,
      email,
      password,
      age,
      gender
    })

    res.status(201).json({
      msg: "user created successfully"
    })
  } catch (error) {
    res.status(400).json({
      msg: "something went wrong"
    })
  }
})





export default app;
