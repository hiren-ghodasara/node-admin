const bcrypt = require('bcrypt')
const { User } = require('../models')

async function authenticate(email, password) {
  const userRecord = await User.findOne({
    where: {
      email,
    },
  })
  if (userRecord) {
    const matched = await bcrypt.compare(password, userRecord.encryptedPassword)
    if (matched) {
      return userRecord
    }
  }
  return false
}

module.exports = {
  authenticate,
}
