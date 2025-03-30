import { Request, Response } from "express";
import { workerServices } from "../services/workerServices";
const workerService = new workerServices();

export class workerControllers {
  async signUpWorker(req: Request, res: Response) {
    try {
      const workerdata = req.body;
      let worker = await workerService.signUpWorker(workerdata);
      res.status(200).json({
        message: "worker and work registration completed successfully",
        worker,
      });
    } catch (err: any) {
      console.log("Error at signUp worker controller", err);
      res.status(err.statusCode || 500).json({ message: err.message });
    }
  }
  loginWorker = async (req: Request, res: Response) => {
    try {
      const workerData = req.body;
      const worker = await workerService.signinWorker(workerData);
      res
        .status(200)
        .json({ message: "worker is logined successfully", worker });
    } catch (err: any) {
      console.log("Error on login in worker:", err);
      res.status(err.statusCode || 500).json({ message: err.message });
    }
  };
}
