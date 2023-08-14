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
      type: DataTypes.STRING,
      references: {
        model: 'staff',
        key: 'id',
        unique: false
      }
    },
    service_staff: {
      type: DataTypes.STRING,
      references: {
        model: 'services',
        key: 'id',
        unique: false
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
