import mongoose, { Schema, Document } from "mongoose";

export interface IWorker extends Document {
  name: string;
  email: string;
  mobile: number;
  password: string;
  location: string;
  skills: string[];
  identity: string;
  status: string;
  isBlocked: boolean;
  date: Date;
}

const workerSchema: Schema = new Schema<IWorker>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    mobile: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    skills: {
      type: [String],
      required: true,
    },
    identity: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Worker = mongoose.model<IWorker>("Worker", workerSchema);
export default Worker;
