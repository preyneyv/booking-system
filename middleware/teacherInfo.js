module.exports = async (req, res, next) => {
  // TODO: replace this stub.
  if (req.query.teacher) {
    req.user = {
      teacher: true,
      id: req.query.teacher
    }
  }
  next()
}