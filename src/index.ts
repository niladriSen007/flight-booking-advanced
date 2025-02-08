import express from "express";
import { config } from "./config"
import apiRoutes from "./routes"
const {serverConfig,logger} = config
const { PORT } = serverConfig;
const app = express();

app.use(express.json());
app.use("/api", apiRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  logger.info(`Server is running on port ${PORT}`);
});