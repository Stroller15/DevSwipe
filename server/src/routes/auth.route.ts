import { Router } from "express";
import { createUser, findUser } from "../controllers/auth.controller.js";

const router = Router();


router.post("/signup", createUser)
router.get("/user", findUser);




export default router;