const { bill: Bill, quantity: Quantity } = require("../models/Bill")
const Menu = require("../models/Menu")
const uuid = require("uuid").v4
const controller = {

  addBill: async (req, res) => {
    try {
      const orderId = uuid()
      let { username, userMobile, tableId, waiterId, items, paymentMode, totalPrice } = req.body
      let bill = await Bill.create({ username, userMobile, items, paymentMode, id: orderId, totalPrice });
      for (item of items) {
        const { quantity, id: menuId, price } = item
        await Quantity.create({ itemQuantity: quantity, orderId, menuId, itemTotal: quantity * price })
      }
      bill = await Bill.update({ username, tableId, waiterId, userMobile, items, paymentMode, totalPrice }, { where: { id: orderId }, returning: true, plain: true });

      res.json(bill[1])
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error
      })
    }
  },
  editBill: async (req, res) => {
    try {

      const { body: { username, userMobile, tableId, waiterId, items, paymentMode, totalPrice }, params: { id } } = req
      console.log({ username, userMobile, tableId, waiterId, items, paymentMode, totalPrice })
      const bill = await Bill.update({ username, userMobile, tableId, waiterId, items, paymentMode, totalPrice }, { where: { id }, returning: true, plain: true });
      res.send(bill[1])
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error
      })
    }
  },

  deleteBill: async (req, res) => {
    try {

      const { params: { id } } = req
      const bill = await Bill.destroy({ where: { id } });
      res.send(bill)
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error
      })
    }
  },
  getAll: async (req, res) => {
    try {

      const all = await Bill.findAll()
      res.send(all)
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error
      })
    }
  },
  getOne: async (req, res) => {
    try {

      const { params: { id } } = req
      const bill = await Bill.findOne({ where: { id }, include: Menu });
      res.send(bill)
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error
      })
    }
  }



}

module.exports = controller