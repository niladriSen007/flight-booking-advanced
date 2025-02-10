import { Model, ModelStatic } from 'sequelize';
import { CreateAirplaneRequest } from '../types';
import { GlobalErrorResponse } from '../utils/errors/global-api-error-response';
import { StatusCodes } from 'http-status-codes';

export class CrudRepository {

  constructor(private readonly model: ModelStatic<Model>) { }

  async create(data: CreateAirplaneRequest): Promise<Model> {
    return await this.model.create({
      modelNumber: data.modelNumber,
      capacity: data.capacity
    });
  }

  async destroy(data: {
    id: number;
  }) {

    const airplane = await this.model.findByPk(data.id);
    if (!airplane) {
      throw new GlobalErrorResponse("Airplane not found",StatusCodes.NOT_FOUND
      );
    }
    return await this.model.destroy({
      where: {
        id: data.id
      }
    });
  }

  async getAll() {
    return await this.model.findAll();
  }

  async getById(id: number) {
    const airplane = await this.model.findByPk(id);
    if (!airplane) {
      throw new GlobalErrorResponse("Airplane not found",StatusCodes.NOT_FOUND);
    }
    return await this.model.findByPk(id);
  }

  async update(id: number, data: CreateAirplaneRequest) {
    return await this.model.update(data, {
      where: {
        id: id
      }
    });
  }
}