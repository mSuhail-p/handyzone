import User from "../model/user";

export class userRepository {
  async signupUser(userData: any) {
    try {
      const user = new User(userData);
      const udate = await user.save();
      return udate;
    } catch (err) {
      console.log("error", err);
      throw new Error("Error saving user data:" + err);
    }
  }
}
