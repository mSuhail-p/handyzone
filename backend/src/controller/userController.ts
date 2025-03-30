import { Request, Response } from "express";
import { userServices } from "../services/userServices";
const userService = new userServices();

export class usercontroller {
  async signupUser(req: Request, res: Response) {
    try {
      const userData = req.body;
      const user = await userService.signupUser(userData);
      res
        .status(200)
        .json({ message: "User created successfully", data: user });
    } catch (err) {
      console.log("error", err);
      res.status(500).json({ message: "Error saving user data " + err });
    }
  }

  async signinUser(req: Request, res: Response) {
    try {
      const userData = req.body;
      const user = await userService.loginUser(userData);
    } catch (err) {
      console.log("Error on login :", err);
      res.status(500).json({ message: "Error on login " + err });
    }
  }
}
