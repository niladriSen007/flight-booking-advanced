import express from "express";

import AirplaneRoutes from "./airplane-routes";
const router = express.Router();


router.use("/airplane", AirplaneRoutes)

export default router