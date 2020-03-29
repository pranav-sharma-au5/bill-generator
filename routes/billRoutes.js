var express = require('express');
var router = express.Router();
const { addBill, editBill, deleteBill, getAll, getOne } = require("../controllers/billController")
/* GET users listing. */
router.post('/', addBill);
router.put('/:id', editBill);
router.delete('/:id', deleteBill);
router.get('/', getAll);
router.get('/:id', getOne);

module.exports = router;
