import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import { connectDB } from "./config/database";
import dotenv from "dotenv";

import userRoutes from "./routes/user.route";
import adminRoutes from "./routes/admin.route";
import workerRoutes from "./routes/worker.route";

dotenv.config();
const app: Express = express();
// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

//Middleware to redirect to  basic routes
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/workers", workerRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

export default app;
