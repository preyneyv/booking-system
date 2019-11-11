const { Teacher } = require('../../database')

// Create a new teacher in the database.
exports.createTeacher = async (req, res) => {
  const { name, email } = req.body
  const teacher = new Teacher({ name, email })
  try {
    await teacher.save()
    res.send({
      success: true,
      teacher
    })
  } catch (e) {
    res.status(422).send({
      success: false,
      message: 'Email is already used.'
    })
  }
}