const express = require('express');
const router = express.Router();
const Student = require('../model');
const recordServices = require('../services/index');
const responsHelper = require('../library/index');

//CREATE
router.post("/newStudent", async (req, res) => {

  try {
      var inputdata = req.body;
      var newResult = await recordServices.createStudent(inputdata);
      return responsHelper.SendResponse(res, newResult);
  }
  catch (err) {
      return responsHelper.SendErrorResponse(err, res);
  }
});

//READ
router.get("/students", async (req, res) => {

  try {
    var inputdata = req.body;
    var newResult = await recordServices.getStudentDetails(inputdata);
    return responsHelper.SendResponse(res, newResult);
  } catch (error) {
    return responsHelper.SendErrorResponse(error, res);
  }
});

//get by id
router.get("/student", async (request, response) => {

  const users = await Student.findOne({ name: request.query.name });
  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

//UPDATE
router.put("/student", async (req, res) => {

  try {
    var inputdata = req.query;
    var newResult = await recordServices.updateStudentDetails(inputdata);
    return responsHelper.SendResponse(res, newResult);
  } catch (error) {
    return responsHelper.SendErrorResponse(err, res);
  }
});

//DELETE
router.delete("/deleteStudent", async (req, res) => {

  try {
    var inputdata = req.query;
    var newResult = await recordServices.deleteStudentDetails(inputdata);
    return responsHelper.SendResponse(res, newResult);
  } catch (error) {
    return responsHelper.SendErrorResponse(err, res);
  }
});


module.exports = router;