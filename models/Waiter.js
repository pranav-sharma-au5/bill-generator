const { DataTypes } = require("sequelize")
const sequelize = require('../db')


const waiter = sequelize.define("waiters", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  mobile: {
    type: DataTypes.CHAR(10),
    unique: true,
    allowNull: false
  },
  ratings: {
    type: DataTypes.FLOAT,
  },
  experience: {
    type: DataTypes.CHAR(3),
  }

},
  { timestamps: false })

module.exports = waiter