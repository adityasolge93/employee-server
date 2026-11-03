const express = require('express');
const employeeController = require('../controllers/employeeController');

const router = express.Router();

router.post('/create', employeeController.create);
router.get('/get/:id', employeeController.getEmployeeById); // /employee/get/123-223-2323

module.exports = router;