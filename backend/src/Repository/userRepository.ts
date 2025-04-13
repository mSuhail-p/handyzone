import User from "../model/user";

export class userRepository {
  async signupUser(userData: any) {
    try {
      const { name, email, password, location, mobile } = userData;
      const user = new User({
        name: name,
        email: email,
        password: password,
        location: location,
        mobile: mobile,
        isVerified: true,
      });
      const updated = await user.save();
      return updated;
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
