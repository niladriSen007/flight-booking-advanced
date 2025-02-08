import express, {
  NextFunction,
  Request,
  Response
} from 'express';
import { AirplaneController } from "../../controllers";
import { AirplaneRepository } from "../../repository";
import { AirplaneService } from "../../services";
import { Airplane } from '../../types';

const router = express.Router();

const airplaneRepository = new AirplaneRepository()
const airplaneService = new AirplaneService(airplaneRepository)
const airplaneController = new AirplaneController(airplaneService)

router.post("/", async (req: Request<{}, {}, Airplane>, res: Response, next: NextFunction) => {
  await airplaneController.createAirplane(req, res, next);
});


export default router