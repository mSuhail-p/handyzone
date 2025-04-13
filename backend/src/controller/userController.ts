import { Request, Response } from "express";

import { userService } from "../other/container";
export class usercontroller {
  public async signupUser(req: Request, res: Response) {
    try {
      const userData = req.body;
      const user = await userService.handleOtp(userData);

      res
        .status(200)
        .json({ message: "User created successfully", data: user });
    } catch (err) {
      console.log("error", err);
      res.status(500).json({ message: "Error saving user data " + err });
    }
  }

  public verifyotp = async (req: Request, res: Response) => {
    try {
      console.log("here is reached verify otppppp")
      const { email, otp } = req.body;
      const userData = await userService.verifyotp(email, otp);
      if (userData) {
        res.status(200).json({ message: "User verified successfully", userData });
      } else {
        res.status(400).json({ message: "Invalid OTP" });
      }
    } catch (err) {
      console.log("error", err);
      res.status(500).json({ message: "Error saving user data " + err });
    }
  };

  async signinUser(req: Request, res: Response) {
    try {
      const userData = req.body;
      const user = await userService.loginUser(userData);
      res.status(200).json({ message: "user logined successfully", user });
    } catch (err) {
      console.log("Error on login :", err);
      res.status(500).json({ message: "Error on login " + err });
    }
  }
}
