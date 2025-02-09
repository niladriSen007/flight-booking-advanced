'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  
  Airplane.init({
    modelNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true,
        isAlphanumeric: true
      }
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 20,
      validate:{
        notEmpty: true,
        isNumeric: true,
        max: 200
      }
    }
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  
  return Airplane;
};