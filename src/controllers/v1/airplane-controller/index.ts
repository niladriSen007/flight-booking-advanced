import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { AirplaneService } from "../../../services/airplane-services";
import { Airplane } from "../../../types";

import { errorFormat, successResponseFormat } from "../../../utils/common";
export class AirplaneController {

  constructor(private readonly airplaneService: AirplaneService) {
  }

  async createAirplane(req: Request<{}, {}, Airplane>, res: Response) {
    try {
      const { modelNumber, capacity } = req.body;
      const airplane = await this.airplaneService.createAirplane({
        modelNumber,
        capacity
      });
      successResponseFormat.data = airplane;
      successResponseFormat.message = "Airplane created successfully";
      return res.status(StatusCodes.CREATED).json(successResponseFormat);
    } catch (error) {
      errorFormat.message = "Internal server error";
      errorFormat.error.explanation = error.message;
      return res.status(error?.statusCode).json(errorFormat);
    }
  }


  async getAllAirplanes(req: Request, res: Response) {
    try {
      const airplanes = await this.airplaneService.getAllAirplanes();
      successResponseFormat.data = airplanes;
      successResponseFormat.message = "Airplanes fetched successfully";
      return res.status(StatusCodes.OK).json(successResponseFormat);
    } catch (error) {
      errorFormat.message = "Internal server error";
      errorFormat.error.explanation = error.message;
      return res.status(error?.statusCode).json(errorFormat);
    }
  }

  async getAirplaneById(req: Request, res: Response) {
    try {
      const airplaneId = Number(req.params.id);
      const airplane = await this.airplaneService.getAirplaneById(airplaneId);
      successResponseFormat.data = airplane! ;
      successResponseFormat.message = "Airplane fetched successfully";
      return res.status(StatusCodes.OK).json(successResponseFormat);
      } catch (error) {
      errorFormat.message = "Internal server error";
      errorFormat.error.explanation = error.message;
      return res.status(error?.statusCode).json(errorFormat);
      }
    }


  async deleteAirplane(req: Request, res: Response) {
    try {
      const airplaneId = Number(req.params.id);
      await this.airplaneService.deleteAirplane(airplaneId);
      successResponseFormat.message = "Airplane deleted successfully";
      return res.status(StatusCodes.OK).json(successResponseFormat);
    } catch (error) {
      errorFormat.message = "Internal server error";
      errorFormat.error.explanation = error.message;
      return res.status(error?.statusCode).json(errorFormat);
    }
  }
}