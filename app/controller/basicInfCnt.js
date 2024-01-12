const express = require('express');
const router = express.Router();
const recordServices = require('../services/basicService');
const responsHelper = require('../library/index');

//CREATE
router.post("/newInfo", async (req, res) => {

  try {
      var inputdata = req.body;
      var newResult = await recordServices.createBasicInfo(inputdata);
      return responsHelper.SendResponse(res, newResult);
  }
  catch (err) {
      return responsHelper.SendErrorResponse(err, res);
  }
});

//READ
router.get("/inform", async (req, res) => {

  try {
    var inputdata = req.body;
    var newResult = await recordServices.getBasicInfo(inputdata);
    return responsHelper.SendResponse(res, newResult);
  } catch (error) {
    return responsHelper.SendErrorResponse(error, res);
  }
});

//READ
router.get("/search", async (req, res) => {

  try {
    var dsearch = req.query;
    var newResult = await recordServices.searchBasicInfo(null, query);
    return responsHelper.SendResponse(res, newResult);
  } catch (error) {
    return responsHelper.SendErrorResponse(error, res);
  }
});

module.exports = router;