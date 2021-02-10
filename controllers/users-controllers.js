const { User } = require('../models')

const selectAll = async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.status(200).json(users)
  } catch (error) {
    let message = "Users can't be shown"
    res.status(200).json(message)
  }
}

module.exports = {
  selectAll,
}
