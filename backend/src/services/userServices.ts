import { userRepository } from "../Repository/userRepository";
const userRepo = new userRepository();
export class userSercies {
  async signupUser(userData: any) {
    try {
      const user = await userRepo.signupUser(userData);
      return user;
    } catch (err) {
      console.log("error", err);
      throw new Error("Error saving user data:" + err);
    }
  }
}
