const { Logo } = require('../models')

const selectAll = async (req, res, next) => {
  try {
    const logos = await Logo.findAll()
    res.status(200).json(logos)
  } catch (error) {
    let message = "Users can't be shown"
    res.status(200).json(message)
  }
}

module.exports = {
  selectAll,
}
