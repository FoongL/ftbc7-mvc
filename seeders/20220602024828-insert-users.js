'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {



    const usersArray = [
      {
        name: 'Foong',
        password: 'supersecretthingnoonewouldguess',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Bryan',
        password: 'iamsuperhackable',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]
    await queryInterface.bulkInsert('users', usersArray, { returning: true });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});

  }
};
