import express from "express";
import Worker from "../model/worker";
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Worker route is working!");
});

export default router;
