const express = require('express')
const logging = require('../logger/logging')
const router = express.Router();
const employyesController = require('../Controller/employeesController')

router.get('/',logging,employyesController.getAllEmployees)
router.get('/:id',employyesController.getEmployeeById)
router.post('/',employyesController.addEmployee)
router.put('/:id', employyesController.updateEmployee)
router.delete('/:id',employyesController.deleteEmployee)

module.exports = router;
