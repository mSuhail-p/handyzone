import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { userRepository } from "../Repository/userRepository";

const userRepo = new userRepository();
dotenv.config();

export class userServices {
  hashPassword = async (password: string) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  };

  async signupUser(userData: any) {
    try {
      const hashedPassword = await this.hashPassword(userData.password);
      userData.password = hashedPassword;

      const user = await userRepo.signupUser(userData);
      return user;
    } catch (err) {
      console.log("error", err);
      throw new Error("Error saving user data:" + err);
    }
  }

  async loginUser(userData: any) {
    try {
      const { email, password } = userData;
      const oGUserDoc = await userRepo.loginUser(email);
      if (!oGUserDoc) {
        return "User is not found ";
      }
      //checking the loged password with existing password
      const isValidUser = await bcrypt.compare(password, oGUserDoc.password);
      let token = jwt.sign(
        { userId: oGUserDoc._id },
        process.env.JWT_SECRET as string,
        { expiresIn: "1h" }
      );
      return token;
    } catch (err) {
      console.log("error at login servives :", err);
      throw new Error("Error at login services:" + err);
    }
  }
}
