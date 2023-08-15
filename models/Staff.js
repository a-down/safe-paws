const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection/config.js');

class Staff extends Model {}

Staff.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    staff_name: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlphanumeric: true
    },
    services: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    staff_img: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // service_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: 'services',
    //     key: 'id',
    //   },
    // }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'staff',
  },
)

module.exports = Staff;