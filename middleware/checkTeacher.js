module.exports = async (req, res, next) => {
  if (req.user && req.user.teacher) {
    return next()
  }
  res.status(401).send({
    success: false,
    message: 'You need to be authenticated as a teacher to use this resource.'
  });
}