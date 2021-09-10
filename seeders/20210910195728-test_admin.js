'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('admins', [
    {
      username: 'test_admin',
      password:'testadmin1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'test_admin2',
      password:'testadmin2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {}),

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('admins', {[Op.or]: [{username: 'test_admin'}, {username: 'test_admin2'}]});
  }
};
