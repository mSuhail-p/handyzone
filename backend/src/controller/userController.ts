import { Request, Response } from "express";
import { userSercies } from "../services/userServices";
const userService = new userSercies();

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
}
