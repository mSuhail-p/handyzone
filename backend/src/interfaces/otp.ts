import { IOtp } from "../model/otp";
export interface IOtpService {
  sendOtp(email: string, otp: string): Promise<void>;
  //   verifyOtp(email: string, otp: string): Promise<boolean>;
  //   resendOtp(email: string): Promise<string>;
  //   verifyEmail(email: string): Promise<boolean>;
}

export interface IOtpRepository {
  saveOtp(email: string): Promise<string>;
  getotp(email: string): Promise<IOtp | null>;
}
