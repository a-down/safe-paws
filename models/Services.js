const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Services extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

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
    },
    staff_id: {
        type: DataTypes.STRING,
        allowNull: true,
    }
  },
)