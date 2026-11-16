const express = require('express');
const employeeController = require('../controllers/employeeController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', employeeController.create);

router.use(authMiddleware.protect);
router.get('/get/:id', employeeController.getEmployeeById); // /employee/get/123-223-2323

module.exports = router;