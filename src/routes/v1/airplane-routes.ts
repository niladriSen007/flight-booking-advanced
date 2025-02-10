import express, {
  Request,
  RequestHandler,
  Response
} from 'express';
import { AirplaneController } from "../../controllers";
import { validateCreateAirplaneRequestValidation } from '../../middlewares';
import { AirplaneRepository } from "../../repository";
import { AirplaneService } from "../../services";
import { Airplane } from '../../types';


const router = express.Router();

const airplaneRepository = new AirplaneRepository()
const airplaneService = new AirplaneService(airplaneRepository)
const airplaneController = new AirplaneController(airplaneService)

router.post("/",
  validateCreateAirplaneRequestValidation as RequestHandler,  
  async (req: Request<{}, {}, Airplane>, res: Response) => {
    await airplaneController.createAirplane(req, res);
  });

router.get("/", async (req: Request, res: Response) => {
  await airplaneController.getAllAirplanes(req, res);
});

router.get("/:id", async (req: Request, res: Response) => {
  await airplaneController.getAirplaneById(req, res);
});

router.delete("/:id", async (req: Request, res: Response) => {
  await airplaneController.deleteAirplane(req, res);
});


export default router