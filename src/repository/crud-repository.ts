import { Model, ModelStatic } from 'sequelize';
import { CreateAirplaneRequest } from '../types';

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