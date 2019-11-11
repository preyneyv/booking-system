const express = require('express')
const checkTeacher = require('../middleware/checkTeacher')
const controller = require('../controllers/api/bookings')
const router = express.Router()

router.get('/', checkTeacher, controller.getBookings)
router.post('/', checkTeacher, controller.createBooking)
router.delete('/:id', checkTeacher, controller.deleteBooking)

module.exports = router