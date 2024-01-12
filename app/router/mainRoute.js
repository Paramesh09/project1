const express = require('express');
const router = express.Router();

const Controller = require('../controller/index');
const addController = require('../controller/addressCnt');
const basicController = require('../controller/basicInfCnt');

//ROUTING
router.use("/demo", Controller);
router.use("/demo1", addController);
router.use("/demo2", basicController);

module.exports = router;