import express from "express";
import { config } from "./config"
import apiRoutes from "./routes"
const { PORT } = config;
const app = express();

app.use("/api", apiRoutes)

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});