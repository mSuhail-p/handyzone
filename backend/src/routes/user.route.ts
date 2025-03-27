import express from "express";
import { usercontroller } from "../controller/userController";
const userController = new usercontroller();

const router = express.Router();

router.get("/", userController.signupUser);

export default router;
