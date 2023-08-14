const { Model, DataTypes } = require('sequelize');

const sequelize = require('../connection/config');

class StaffServices extends Model { }

StaffServices.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    staff_service: {
      type: DataTypes.INTEGER,
      references: {
        model: 'staff',
        key: 'id',
      }
    },
    service_staff: {
      type: DataTypes.INTEGER,
      references: {
        model: 'services',
        key: 'id',
      }
    }
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
