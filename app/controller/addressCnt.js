const express = require('express');
const router = express.Router();
const recordServices = require('../services/addService');
const responsHelper = require('../library/index');

//CREATE
router.post("/newAddress", async (req, res) => {

  try {
      var inputdata = req.body;
      var newResult = await recordServices.createAddress(inputdata);
      return responsHelper.SendResponse(res, newResult);
  }
  catch (err) {
      return responsHelper.SendErrorResponse(err, res);
  }
});

//READ
router.get("/addresses", async (req, res) => {

  try {
    var inputdata = req.body;
    var newResult = await recordServices.getAddressDetails(inputdata);
    return responsHelper.SendResponse(res, newResult);
  } catch (error) {
    return responsHelper.SendErrorResponse(error, res);
  }
});

//READ
router.get("/search", async (req, res) => {

  try {
    var dsearch = req.query;
    var newResult = await recordServices.searchDetails(dsearch);
    return responsHelper.SendResponse(res, newResult);
  } catch (error) {
    return responsHelper.SendErrorResponse(error, res);
  }
});

module.exports = router;