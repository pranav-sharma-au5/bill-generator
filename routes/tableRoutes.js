var express = require('express');
var router = express.Router();
const { addTable, editTable, deleteTable, getAll, getOne } = require("../controllers/tableController")
/* GET users listing. */
router.post('/', addTable);
router.put('/:id', editTable);
router.delete('/:id', deleteTable);
router.get('/', getAll);
router.get('/:id', getOne);

module.exports = router;