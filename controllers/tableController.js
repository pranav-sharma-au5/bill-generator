
const Table = require("../models/Table")

const controller = {

  addTable: async (req, res) => {
    try {

      let { name, seatingStrength, floor } = req.body
      console.log(req.body)
      const table = await Table.create({ name, seatingStrength, floor });
      res.send(table)
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error
      })
    }
  },
  editTable: async (req, res) => {
    try {
      const { body: { name, seatingStrength, floor }, params: { id } } = req
      const table = await Table.update({ name, seatingStrength, floor }, { where: { id } });
      res.send(table)
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error
      })
    }
  },
  deleteTable: async (req, res) => {
    try {

      const { params: { id } } = req
      const table = await Table.destroy({ where: { id } });
      res.send(table)
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error
      })
    }
  },
  getAll: async (req, res) => {
    try {

      const all = await Table.findAll()
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
      const table = await Table.findOne({ where: { id } });
      res.send(table)
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error
      })
    }
  }

}

module.exports = controller