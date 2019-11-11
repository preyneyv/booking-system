// Routes for the Teachers API
const controller = require('../controllers/api/teachers')
const express = require('express')
const router = express.Router()

router.post('/', controller.createTeacher)

module.exports = router