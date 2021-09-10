'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('employees', [
    {
      name: "test_employee",
      address: "101 test st",
      phone: "888 888 8888",
      employee_id: "test321",
      salary: 10000,
      email: "testemp@gmail.com",
      password: "test_password",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
  ], {}),

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('employees', {[Op.or]: [{name: 'test_employee'}]});
  }
};
