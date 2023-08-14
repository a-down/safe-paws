const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection/config.js');

class Services extends Model { }

Services.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    service_name: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlphanumeric: true
    },
    staff_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'staff',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'services',
  },
)

module.exports = Services;