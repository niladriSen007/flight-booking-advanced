import { Model } from "sequelize";
import { config } from "../config";
import {db} from "../models";
import { CrudRepository } from "./crud-repository";

export class AirplaneRepository extends CrudRepository {
  constructor() {
    super(db.Airplane);
  }

  async getAirplanesByManufacturer(manufacturer: string): Promise<Model[]> {
    try {
      return await this.model.findAll({
        where: {
          manufacturer: manufacturer,
        },
      });
    } catch (error) {
      config.logger.error(error.message);
      throw new Error(error.message);
    }
  }

  async getAirplanesByType(type: string): Promise<Model[]> {
    try {
      return await this.model.findAll({
        where: {
          type: type,
        },
      });
    } catch (error) {
      config.logger.error(error.message);
      throw new Error(error.message);
    }
  }
}