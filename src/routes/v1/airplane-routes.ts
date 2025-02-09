import express, {
  NextFunction,
  Request,
  RequestHandler,
  Response
} from 'express';
import { AirplaneController } from "../../controllers";
import { AirplaneRepository } from "../../repository";
import { AirplaneService } from "../../services";
import { Airplane } from '../../types';
import { validateCreateAirplaneRequestValidation } from '../../middlewares';


const router = express.Router();

const airplaneRepository = new AirplaneRepository()
const airplaneService = new AirplaneService(airplaneRepository)
const airplaneController = new AirplaneController(airplaneService)

router.post("/",
  validateCreateAirplaneRequestValidation as RequestHandler,  async (req: Request<{}, {}, Airplane>, res: Response) => {
    await airplaneController.createAirplane(req, res);
  });


export default router