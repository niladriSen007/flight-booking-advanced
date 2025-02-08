
import { config } from "../config";
import { AirplaneRepository } from "../repository/airplane-repository";

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
      config.logger.error(error.message);
      throw new Error(error.message);
    }

  }
}