const express = require('express');
const moment = require('moment');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { timeNow: moment().format('hh:mm A') });
});

module.exports = router;
