import express from "express";
import { adminControllers } from "../controller/adminController";
const router = express.Router();
const adminController = new adminControllers();

 
router.patch("/requesedWork/approve", adminController.approveForWorks);

export default router;
