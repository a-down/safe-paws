const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class StaffServices extends Model {}

Category.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = StaffServices;
