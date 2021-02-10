const { Settings } = require('../models')

const selectOne = async (req, res, next) => {
  try {
    const setting = await Settings.findOne()
    res.status(200).json(setting)
  } catch (error) {
    let message = "Users can't be shown"
    res.status(200).json(message)
  }
}

module.exports = {
  selectOne,
}
