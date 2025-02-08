import express from "express";
import { controllers } from "../../controllers";

const router = express.Router();
const { v1 } = controllers
const { info } = v1

router.get("/info", info)

export default router