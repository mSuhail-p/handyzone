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
  async loginUser(email: any) {
    try {
      let userDoc = await User.findOne({ email: email });
      return userDoc;
    } catch (err) {
      console.log("Error at login repo:", err);
      throw new Error("Error saving user data:" + err);
    }
  }
}
