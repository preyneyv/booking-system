// Routes for the Teachers API
const controller = require('../controllers/api/teachers')
const express = require('express')
const router = express.Router()

// -- DEBUG ROUTES --
router.post('/', controller.createTeacher)
router.get('/', contorller.getTeachers)
// -- END OF DEBUG ROUTES --

module.exports = router