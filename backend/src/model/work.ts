import mongoose, { Schema, Document } from "mongoose";

export interface IWork extends Document {
  serviceCategory: string;
  workName: string;
  service_fee: number;
  brief_description: string;
  description: string;
  tools_Worker: [string];
  tools_client: [string];
  image: string;
  status: string;
  workerId: mongoose.Types.ObjectId;
}

const workSchema: Schema = new Schema<IWork>({
  serviceCategory: {
    type: String,
    required: true,
  },
  workName: {
    type: String,
    required: true,
  },
  service_fee: {
    type: Number,
    required: true,
  },
  brief_description: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tools_Worker: {
    type: [String],
    required: true,
  },
  tools_client: {
    type: [String],
  },
  status: {
    type: String,
    enum: ["requsted", "verified"],
    default: "requsted",
  },
  workerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Worker",
    required: true,
  },
});

const Work = mongoose.model<IWork>("Work", workSchema);

export default Work;
