import { Request, Response } from "express";
import { adminServices } from "../services/adminServices";
const adminService = new adminServices();

export class adminControllers {
  signIn = async (req: Request, res: Response) => {};

  approveForWorks = async (req: Request, res: Response) => {
    try {
      const workid: string = req.query.workid as string;
      console.log(workid,'it is workid ')
      const verified = await adminService.approveForWorks(workid);
      res
        .status(200)
        .json({ message: "verification completed successfully", verified });
    } catch (err) {
      console.log("Error on approveFroWorkers in admin controllers:", err);
      res.status(500).json("internal error on work approval section");
    }
  };
}
