import { workerRepository } from "../Repository/workerRepository";
import bcrypt from "bcryptjs";

const workerRepo = new workerRepository();
export class workerServices {
  hashPassword = async (password: string) => {
    return await bcrypt.hash(password, 10);
  };

  signUpWorker = async (workerData: any) => {
    try {
      const hashedPassword = await this.hashPassword(workerData.password);
      //Update password on worker data object as hashed one
      workerData.password = hashedPassword;
      const storedWorker = await workerRepo.signUWorker(workerData);
      return storedWorker;
    } catch (err) {
      console.log("Error on signup worker in worker services:", err);
      throw new Error("Error on signup worker in worker services" + err);
    }
  };

  signinWorker = async (workerData: any) => {
    try {
      const { password, email } = workerData;
      const workerDoc = await workerRepo.loginWorker(email);
      if (!workerDoc) {
        throw { statusCode: 404, message: "worker is not found" };
      }
      const passwordMatch = await bcrypt.compare(password, workerDoc.password);
      if (passwordMatch) {
        return workerDoc._id;
      } else {
        throw { statusCode: 404, message: "credentials are not matched" };
      }
    } catch (err) {
      console.log("Error on signIn worker in Worker services:", err);
      throw new Error("Error on signIn worker in Worker services" + err);
    }
  };
}
