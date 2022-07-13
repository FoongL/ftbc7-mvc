'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};
console.log(config)
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}


// default from sequlize init command

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });


// alternative way to do it (Rocket Gitbook way)

// import our models
const initUsersModel= require('./users')
const initItemModel = require('./items')
const initCategoriesModel = require('./categories');

db.users = initUsersModel(sequelize, Sequelize.DataTypes)
db.items = initItemModel(sequelize, Sequelize.DataTypes)
db.categories = initCategoriesModel(sequelize, Sequelize.DataTypes)

// Associations:

// One to Many
// db.users.hasMany(db.items)
// db.items.belongsTo(db.users)



// Many to Many
db.items.belongsToMany(db.categories, {through: 'category-item'})
db.categories.belongsToMany(db.items, {through: 'category-item'})

// db.items.belongsToMany(db.categories)
// db.categories.belongsToMany(db.items)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
