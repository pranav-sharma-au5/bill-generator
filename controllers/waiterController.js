const Waiter = require("../models/Waiter")

const controller = {

  addWaiter: async (req, res) => {
    try {

      let { name, age, mobile, ratings, experience } = req.body
      console.log(req.body)
      const waiter = await Waiter.create({ name, age, mobile, ratings, experience });
      res.send(waiter)
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error
      })
    }
  },
  editWaiter: async (req, res) => {
    try {
      const { body: { name, age, mobile, ratings, experience }, params: { id } } = req
      const waiter = await Waiter.update({ name, age, mobile, ratings, experience }, { where: { id } });
      res.send(waiter)
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error
      })
    }
  },
  deleteWaiter: async (req, res) => {
    try {

      const { params: { id } } = req
      const waiter = await Waiter.destroy({ where: { id } });
      res.send(waiter)
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error
      })
    }
  },
  getAll: async (req, res) => {
    try {

      const all = await Waiter.findAll()
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
      const waiter = await Waiter.findOne({ where: { id } });
      res.send(waiter)
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error
      })
    }
  }

}

module.exports = controller