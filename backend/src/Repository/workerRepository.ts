import Worker from "../model/worker";
import Work from "../model/work";

export class workerRepository {
  signUWorker = async (workerData: any) => {
    try {
      const {
        workerName,
        email,
        password,
        mobile,
        location,
        skills,
        identity,
      } = workerData;
      let worker = new Worker({
        workerName: workerName,
        email: email,
        password: password,
        mobile: mobile,
        location: location,
        skills: skills,
        identity: identity,
      });
      const worderDoc = await worker.save();
      const newWorkData = await this.newWork(
        workerData,
        worderDoc._id as string
      );
      return newWorkData;
    } catch (err) {
      console.log("Error on signUpWorker on worker repo:", err);
      throw new Error("Error on signUpWorker on worker repo:" + err);
    }
  };

  newWork = async (workData: any, workerId: string) => {
    try {
      const {
        workName,
        service_fee,
        brief_description,
        description,
        tools_client,
        tools_Worker,
        serviceCategory,
      } = workData;
      const workAdding = new Work({
        workName: workName,
        serviceCategory: serviceCategory,
        service_fee: service_fee,
        brief_description: brief_description,
        description: description,
        tools_Worker: tools_Worker,
        tools_client: tools_client,
        workerId: workerId,
      });
      const addedWork = await workAdding.save();
      return addedWork;
    } catch (err) {
      console.log("Error on work adding repo file:", err);
      throw new Error("Erro on work adding repo file" + err);
    }
  };

  loginWorker = async (email: string) => {
    try {
      return await Worker.findOne({ email: email });
    } catch (err) {
      console.log("Error on login worker in worker repo:", err);
      throw new Error("Error on login worker in worker repo" + err);
    }
  };
}
