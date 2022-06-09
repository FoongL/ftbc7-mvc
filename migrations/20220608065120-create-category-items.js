'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('category-item',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        item_id:{
          allowNull: false,
          type: Sequelize.INTEGER,
          refrences:{
            model:'items',
            key:'id'
          }
        },
        category_id:{
          allowNull: false,
          type: Sequelize.INTEGER,
          refrences:{
            model:'categories',
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
    await queryInterface.dropTable('category-item');
  }
};
