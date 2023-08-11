const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Services extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Pets.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pet_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pet_type: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    pet_img: {

    },
    user_id: {

    },
    special_details: {

    }
  },
)