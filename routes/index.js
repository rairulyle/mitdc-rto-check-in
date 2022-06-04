const express = require('express');

const apiRouter = require('./api');
const viewRouter = require('./views');

const router = express.Router();

router.use('/api', apiRouter);
router.use('/',viewRouter)


module.exports = router;