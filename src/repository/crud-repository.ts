import { Model, ModelStatic } from 'sequelize';
import { config } from '../config';

export class CrudRepository {
  protected model: ModelStatic<Model>;

  constructor(model: ModelStatic<Model>) {
    this.model = model;
  }

  async create(data: {
    modelNumber: string;
    capacity: number;
  }): Promise<Model> {
    try {
      return await this.model.create(data);
    } catch (error) {
      config.logger.error(error.message);
      throw new Error(error);
    }
  }

  async destroy(){
    try {
      // Implementation
      return await this.model.destroy({
        where:{
          // conditions
        }
      });
    } catch (error) {
      config.logger.error(error.message);
      throw new Error(error.message);
      
    }
  }

  async getAll(){
    try {
      // Implementation
      return await this.model.findAll();
    } catch (error) {
      config.logger.error(error.message);
      throw new Error(error.message);
    }
  }

  async getById(id: number){
    try {
      // Implementation
      return await this.model.findByPk(id);
    } catch (error) {
      config.logger.error(error.message);
      throw new Error(error.message);
    }
  }

  async update(id:number,data: { [key: string]: any }){
    try {
      // Implementation
      return await this.model.update(data,{
        where:{
          id: id
        }
      });
    } catch (error) {
      config.logger.error(error.message);
      throw new Error(error.message);
    }
  }
}