const { Model, DataTypes } = require('sequelize');

const sequelize = require('../connection/config.js');

class Reviews extends Model { }

Reviews.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    review_content: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      isAlphanumeric: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'reviews',
  },
);

module.exports = Reviews;