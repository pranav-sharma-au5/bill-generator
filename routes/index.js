var express = require('express');
var router = express.Router();
var billRouter = require('./billRoutes');
var menuRouter = require('./menuRoutes');
var tableRouter = require('./tableRoutes');
var waiterRouter = require('./waiterRoutes');

/* GET home page. */
router.use('/bill', billRouter);
router.use('/menu', menuRouter);
router.use('/table', tableRouter);
router.use('/waiter', waiterRouter);


module.exports = router;
