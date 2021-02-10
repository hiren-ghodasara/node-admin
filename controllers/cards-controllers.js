const { CardImage } = require('../models')

const selectAll = async (req, res, next) => {
  try {
    const cards = await CardImage.findAll()
    res.status(200).json(cards)
  } catch (error) {
    let message = "Users can't be shown"
    res.status(200).json(message)
  }
}

module.exports = {
  selectAll,
}
