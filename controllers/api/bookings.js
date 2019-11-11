const { Room, Booking } = require('../../database')

// Get all of a teacher's bookings 
exports.getBookings = async (req, res) => {
  // return res.send(req.query)
  const { rooms, from, to } = req.query
  const { id } = req.user
  if (typeof rooms === 'string') {
    rooms = [rooms]
  }
  const query = { teacher: id }
  
  if (from || to)
    query.date = {}
 
  if (from)
    query.date.$gte = new Date(from)
  
  if (to)
    query.date.$lte = new Date(from)
  
  const bookings = await Booking.find(query)
  return res.send({ bookings })
}

// Create a new booking
exports.createBooking = async (req, res) => {
  let { room, date, period } = req.body
  const { id } = req.user

  date = new Date(date)

  if (! (room && date && period))
    return res.status(422).send({ success: false, message: 'Missing parameters.' })

  if (!await Room.findById(room))
    return res.status(422).send({ success: false, message: 'Room doesn\'t exist.' })
  
  const existingBooking = await Booking.findOne({ room, date, period })
  if (existingBooking)
    return res.status(422).send({ success: false, message: 'Room is already booked at that time.' })

  const booking = new Booking({ room, date, period, teacher: id })
  await booking.save()
  return res.send({
    success: true,
    booking
  })
}

// Delete a booking
exports.deleteBooking = async (req, res) => {
  const bookingId = req.params.id
  const teacherId = req.user.id

  const booking = await Booking.findOneAndDelete({
    _id: bookingId,
    teacher: teacherId
  })
  if (booking) {
    res.send({
      success: true,
      message: 'Booking deleted.',
      booking
    })
  } else {
    res.status(404).send({
      success: false,
      message: 'Booking not found.'
    })
  }
}