import { userRepository } from "../Repository/userRepository";
import { otpRepositories } from "../Repository/otpRespository";
import otpServices from "../services/otpServices";
import { userServices } from "../services/userServices";

const userRepo = new userRepository();
const otpRepo = new otpRepositories();
const otpService = new otpServices();
const userService = new userServices(userRepo, otpRepo, otpService);

export { userService };
