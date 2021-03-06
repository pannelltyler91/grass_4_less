'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  employees.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    employee_id: DataTypes.STRING,
    salary: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'employees',
  });
  return employees;
};