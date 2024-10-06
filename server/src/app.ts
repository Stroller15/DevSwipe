import express, { Application, NextFunction, Request, Response } from "express";

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



export default app;
