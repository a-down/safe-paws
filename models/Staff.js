const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Staff extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

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
    },
    services: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    staff_img: {

    },
    service_id:{
        
    }
  },
)