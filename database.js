const mongoose = require('mongoose')
const config = require('./config')

const { Schema } = mongoose
mongoose.connect(config.DBURI)

const roomSchema = new Schema({
  name: String
})

const teacherSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  password: String
})

const bookingSchema = new Schema({
  teacher: {
    type: mongoose.Types.ObjectId,
    ref: 'Teacher'
  },
  room: {
    type: mongoose.Types.ObjectId,
    ref: 'Room'
  },
  date: Date,
  period: Number
})

module.exports = {
  Room: mongoose.model('Room', roomSchema),
  Teacher: mongoose.model('Teacher', teacherSchema),
  Booking: mongoose.model('Booking', bookingSchema),
}