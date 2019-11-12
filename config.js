const defaults = {
  PORT: 3000,
  DBURI: 'mongodb://localhost/booking_system'
}

for (let key of Object.keys(process.env)) {
  defaults[key] = process.env[key]
}

module.exports = defaults