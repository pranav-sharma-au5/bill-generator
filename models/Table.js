const { DataTypes } = require("sequelize")
const sequelize = require('../db')


const table = sequelize.define("tables", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  seatingStrength: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  floor: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

},
  { timestamps: false })

module.exports = table