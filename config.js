const defaults = {
  port: 3000,
  dbUri: 'mongodb://localhost/booking_system'
}

for (let key of Object.keys(process.env)) {
  defaults[key.toLowerCase()] = process.env[key]
}

module.exports = defaults