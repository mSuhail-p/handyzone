import app from "./app";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => "Server is running on port " + PORT);
