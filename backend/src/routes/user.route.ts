import express from "express";
import { usercontroller } from "../controller/userController";
const userController = new usercontroller();

const router = express.Router();

router.post("/login",userController.signinUser)
router.post("/signup", userController.signupUser);

export default router;
