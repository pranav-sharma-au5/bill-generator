const { DataTypes } = require("sequelize")
const sequelize = require('../db')


const item = sequelize.define("menu", {
  itemName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cuisineName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dishType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  }

},
  { timestamps: false })

module.exports = item