import bcrypt from "bcryptjs";
import { userRepository } from "../Repository/userRepository";

const userRepo = new userRepository();

export class userSercies {
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

  hashPassword = async (password: string) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  };
}
