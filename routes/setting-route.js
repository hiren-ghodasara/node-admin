const express = require('express')
const settingsRoute = express.Router()
//
const settingsControllers = require('../controllers/settings-controllers')

settingsRoute.get('/', settingsControllers.selectOne)

module.exports = { settingsRoute }
