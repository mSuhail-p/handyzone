import Work from "../model/work";

export class adminRepository {
  approveForWorks = async (workid: string) => {
    try {
      const updatedWork = await Work.findOneAndUpdate(
        { _id: workid },
        { status: "verified" }
      );
      return updatedWork;
    } catch (err) {
      console.log("Error on approveForWorks in  admin repo :", err);
      throw new Error("Error on approveForWorks in  admin repo :" + err);
    }
  };
}
