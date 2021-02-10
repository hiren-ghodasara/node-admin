const { Categories } = require('../models')

const selectAll = async (req, res, next) => {
  try {
    const categories = await Categories.findAll()
    res.status(200).json(categories)
  } catch (error) {
    let message = "Users can't be shown"
    res.status(200).json(message)
  }
}

module.exports = {
  selectAll,
}
