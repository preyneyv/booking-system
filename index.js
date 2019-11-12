const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const config = require('./config')
const teacherInfoMiddleware = require('./middleware/teacherInfo')

console.log(config.port)


// Add the body parsers.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(teacherInfoMiddleware)

// Load and configure the routes for this app.
app.use('/api/rooms/', require('./routes/rooms'))
app.use('/api/bookings/', require('./routes/bookings'))
app.use('/api/teachers/', require('./routes/teachers'))

// Set the app to listen on the port.
app.listen(config.port, () => console.log(`Listening on port ${config.port}`))