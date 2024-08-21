import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectMongodb from "./db/connectMongodb.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
console.log(process.env.MONGO_URI);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
  connectMongodb();
});
