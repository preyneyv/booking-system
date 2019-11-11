const { Room } = require('../../database')

// Respond with all rooms.
exports.getRooms = async (req, res) => {
  const rooms = await Room.find() // Get all rooms
  res.send({ rooms })
}

// Create a new room
exports.createRoom = async (req, res) => {
  const { name } = req.body
  const room = new Room
  room.name = name
  await room.save()
  res.send({ room })
}

// Delete a room.
exports.deleteRoom = async (req, res) => {
  const { id } = req.params
  const room = await Room.findByIdAndDelete(id)
  if (room)
    res.send({ success: true, room, message: 'Room deleted successfully.' })
  else
    res.status(404).send({ success: false, message: 'Room not found.' })
}

// Update an existing room.
exports.updateRoom = async (req, res) => {
  const { id } = req.params
  const { name } = req.body
  const room = await Room.findByIdAndUpdate(id, { name }, { new: true })
  if (room)
    res.send({ success: true, room, message: 'Room updated successfully.' })
  else
    res.status(404).send({ success: false, message: 'Room not found.' })
}