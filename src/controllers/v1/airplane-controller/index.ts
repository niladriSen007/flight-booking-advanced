import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { AirplaneService } from "../../../services/airplane-services";
import { Airplane } from "../../../types";
export class AirplaneController {

  constructor(private readonly airplaneService: AirplaneService) {
  }

  async createAirplane(req: Request<{}, {}, Airplane>, res: Response, next: NextFunction) {
    try {
      const { modelNumber, capacity } = req?.body;
      const airplane = await this.airplaneService.createAirplane({
        modelNumber,
        capacity
      });
      return res.status(StatusCodes.CREATED).json({
        success: true,
        data: airplane,
        message: "Airplane created successfully",
        error: {}
      });
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        data: {},
        message: "Internal server error",
        error: error.message
      });
    }
  }
}