var express = require('express');
var router = express.Router();
const { addItem, editItem, deleteItem, getAll, getOne } = require("../controllers/menuController")
/* GET users listing. */
router.post('/', addItem);
router.put('/:id', editItem);
router.delete('/:id', deleteItem);
router.get('/', getAll);
router.get('/:id', getOne);

module.exports = router;