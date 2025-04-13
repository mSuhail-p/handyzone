import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { userRepository } from "../Repository/userRepository";
import { otpRepositories } from "../Repository/otpRespository";
import otpServices from "../services/otpServices";
import reidsClient from "../lib/redis";

dotenv.config();

export class userServices {
  constructor(
    private userRepo: userRepository,
    private otpRepo: otpRepositories,
    private otpService: otpServices
  ) {}
  hashPassword = async (password: string) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  };

  public async handleOtp(userdata: any) {
    try {
      const hashedPassword = await this.hashPassword(userdata.password);
      userdata.password = hashedPassword;
      // reidsClient.set(userdata.email, userdata, { EX: 40 });
      reidsClient.set(userdata.email, JSON.stringify(userdata), { EX: 40 });

      const { email } = userdata;
      const Otp = await this.otpRepo.saveOtp(email);
      await this.otpService.sendOtp(email, Otp);
    } catch (err) {
      console.log("error at handle otp", err);
      throw new Error("Error at handle otp:" + err);
    }
  }

  public async verifyotp(email: string, otp: string) {
    try {
      const ogOtp = await this.otpRepo.getotp(email);
      if (!ogOtp) {
        throw new Error("OTP not found or expired");
      }
      if (ogOtp.otp !== otp) {
        throw new Error("Invalid OTP");
      }
      const USERDATA = await reidsClient.get(email);
      const userData = JSON.parse(USERDATA as string);
      console.log(
        "................................................IT IS USER DATA FROM REDIS.........................................",
        userData
      );
      if (!userData) {
        throw new Error("User data not found in Redis");
      }
      const user = this.userRepo.signupUser(userData);
      return user;
    } catch (err) {
      console.log("error", err);
      throw new Error("Error saving user data:" + err);
    }
  }

  async loginUser(userData: any) {
    try {
      const { email, password } = userData;
      const oGUserDoc = await this.userRepo.loginUser(email);
      if (!oGUserDoc) {
        return "User is not found ";
      }
      //checking the loged password with existing password
      const isValidUser = await bcrypt.compare(password, oGUserDoc.password);
      if (isValidUser) {
        let token = jwt.sign(
          { userId: oGUserDoc._id },
          process.env.JWT_SECRET as string,
          { expiresIn: "1h" }
        );
        return token;
      } else {
        return "credentials are not matched";
      }
    } catch (err) {
      console.log("error at login servives :", err);
      throw new Error("Error at login services:" + err);
    }
  }
}
