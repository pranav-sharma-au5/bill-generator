var express = require('express');
var router = express.Router();
const { addWaiter, editWaiter, deleteWaiter, getAll, getOne } = require("../controllers/waiterController")
/* GET users listing. */
router.post('/', addWaiter);
router.put('/:id', editWaiter);
router.delete('/:id', deleteWaiter);
router.get('/', getAll);
router.get('/:id', getOne);

module.exports = router;