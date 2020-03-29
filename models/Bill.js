const { DataTypes } = require("sequelize")
const sequelize = require('../db')
const waiter = require("./Waiter")
const table = require("./Table")
const item = require("./Menu")

const bill = sequelize.define("orders", {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  totalPrice: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  items: {
    type: DataTypes.JSON,
    allowNull: false
  },

  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userMobile: {
    type: DataTypes.CHAR(10),
    allowNull: false,
    unique: true
  },

  paymentMode: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
  { timestamps: false }
)

const quantity = sequelize.define("quantity", {
  itemQuantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  itemTotal: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false
})
bill.belongsTo(table)
bill.belongsTo(waiter)
table.hasOne(bill)
waiter.hasOne(bill)
item.belongsToMany(bill, { through: quantity });
bill.belongsToMany(item, { through: quantity });
item.hasMany(quantity);
quantity.belongsTo(item);
bill.hasMany(quantity);
quantity.belongsTo(bill)

// bill.sync({ force: true })
// quantity.sync({ force: true })
module.exports = { bill, quantity }