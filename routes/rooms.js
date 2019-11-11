// Routes for the Rooms API
const controller = require('../controllers/api/rooms')
const express = require('express')
const router = express.Router()

router.get('/', controller.getRooms)
router.post('/', controller.createRoom)
router.delete('/:id', controller.deleteRoom)
router.put('/:id', controller.updateRoom)

module.exports = router