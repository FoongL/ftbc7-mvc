'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('items',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          allowNull: false,
          unique: true,
          type: Sequelize.STRING
        },
        user_id:{
          allowNull: false,
          type: Sequelize.INTEGER,
          refrences:{
            model:'users',
            key:'id'
          }
        },
        created_at:{
          allowNull: false,
          type: Sequelize.DATE
        },
        updated_at:{
          allowNull:false,
          type: Sequelize.DATE
        }
      });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('items');
  }
};
