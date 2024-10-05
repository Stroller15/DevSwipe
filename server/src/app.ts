import express, { Application } from "express";



const app: Application = express();


// * default middleware
app.use(express.json());

// * Custom middleware


// * Routes


export default app;