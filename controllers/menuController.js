const Item = require("../models/Menu")

const controller = {

  addItem: async (req, res) => {
    try {

      let { itemName, cuisineName, dishType, price } = req.body
      console.log(req.body)
      const item = await Item.create({ itemName, cuisineName, dishType, price });
      res.send(item)
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error
      })
    }
  },
  editItem: async (req, res) => {
    try {
      const { body: { itemName, cuisineName, dishType, price }, params: { id } } = req
      const item = await Item.update({ itemName, cuisineName, dishType, price }, { where: { id } });
      res.send(item)
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error
      })
    }
  },
  deleteItem: async (req, res) => {
    try {

      const { params: { id } } = req
      const item = await Item.destroy({ where: { id } });
      res.send(item)
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error
      })
    }
  },
  getAll: async (req, res) => {
    try {

      const all = await Item.findAll()
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
      const item = await Item.findOne({ where: { id } });
      res.send(item)
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error
      })
    }
  }

}

module.exports = controller