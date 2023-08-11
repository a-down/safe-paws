const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Bookings extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Bookings.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    service_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    user_id: {

    },
    pet_id: {

    },
    service_received: {
        type: DataTypes.STRING,
        allowNull: true,
    }
  },
)