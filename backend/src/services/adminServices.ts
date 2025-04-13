import { adminRepository } from "../Repository/adminRepository";
const adminRepo = new adminRepository();
export class adminServices {
  approveForWorks = async (workId: string) => {
    try {
      return adminRepo.approveForWorks(workId);
    } catch (err) {
      console.log("Error on approveForWorks in  admin services :", err);
      throw new Error("Error on approveForWorks in  admin services :" + err);
    }
  };
}
