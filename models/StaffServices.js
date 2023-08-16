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
    staff_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'staff',
        key: 'id',
      }
    },
    services_id: {
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
    modelName: 'staff_services',
  }
);

module.exports = StaffServices;
