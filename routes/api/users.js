const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({name: 'Lyle Vince Dela Cuesta'});
});

module.exports = router;
