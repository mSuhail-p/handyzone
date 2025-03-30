import express from "express";
import { workerControllers } from "../controller/workerController";
const workerController = new workerControllers();

const router = express.Router();

router.post("/signup", workerController.signUpWorker);
router.post("/login",workerController.loginWorker)

export default router;
