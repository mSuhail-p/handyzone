import OTP from "../model/otp";
import { IOtpRepository } from "../interfaces/otp";
import { IOtp } from "../model/otp";

export class otpRepositories implements IOtpRepository {
  private generateOTP(length: number): string {
    let otp = Math.floor(Math.random() * 10 ** length)
      .toString()
      .padStart(length, "0");
    return otp;
  }

  public async saveOtp(email: string): Promise<string> {
    try {
      const otp = this.generateOTP(4);
      const otpDoc = new OTP({
        email: email,
        otp: otp,
        expiresAt: new Date(Date.now() + 30 * 1000), // OTP expires in 30 seconds
      });
      const Otp = await otpDoc.save();
      return Otp.otp;
    } catch (err) {
      console.log("Error at otp repo:", err);
      throw new Error("Error saving OTP data:" + err);
    }
  }

  public async getotp(email: string): Promise<IOtp | null> {
    try {
      const otpDoc = await OTP.findOne({ email: email });
      return otpDoc;
    } catch (err) {
      console.log("Error at otp repo:", err);
      throw new Error("Error saving OTP data:" + err);
    }
  }
}
