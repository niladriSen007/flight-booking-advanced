import { StatusCodes } from "http-status-codes";
import { config } from "../config";
import { AirplaneRepository } from "../repository/airplane-repository";
import { GlobalErrorResponse } from "../utils/errors/global-api-error-response";

export class AirplaneService {
  constructor(private readonly airplaneRepository: AirplaneRepository) {
  }
  async createAirplane(data: {
    modelNumber: string;
    capacity: number;
  }) {
    try {
      return await this.airplaneRepository.create(data);
    } catch (error) {
      if (error.message.includes("SequelizeValidationError")) {
        const explanations = [error?.message]
        config.logger.error(explanations.join(', '));
        throw new GlobalErrorResponse(explanations.join(', '), StatusCodes.BAD_REQUEST);
      }

      config.logger.error(error.message);
      throw new Error(error.message);
    }
  }

  async getAllAirplanes() {
    try {
      return await this.airplaneRepository.getAll();
    } catch (error) {
      config.logger.error(error.message);
      throw new GlobalErrorResponse(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }


  async getAirplaneById(id: number) {
    try {
      return await this.airplaneRepository.getById(id);
    } catch (error) {
      if (error?.statusCode === StatusCodes.NOT_FOUND) {
        throw new GlobalErrorResponse("Airplane not found", StatusCodes.NOT_FOUND);
      }
      config.logger.error(error.message);
      throw new GlobalErrorResponse(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
}