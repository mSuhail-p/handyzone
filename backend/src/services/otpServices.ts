import { IOtpService } from "../interfaces/otp";
import nodemailer from "nodemailer";

class otpServices implements IOtpService {
  public async sendOtp(email: string, otp: string): Promise<void> {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_OWNER,
          pass: process.env.APP_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_OWNER,
        to: email,
        subject: "OTP for verification",
        text: `Your OTP is ${otp}`,
      };

      await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Error sending email: ", error);
        } else {
          console.log("Email sent: ", info.response);
        }
      });

      console.log("OTP sent to email:", email, otp);
    } catch (err) {
      console.log("Error in sending OTP: ", err);
      throw new Error("Error in sending OTP: " + err);
    }
  }
}

export default otpServices;
