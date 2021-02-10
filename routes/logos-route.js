const express = require('express')
const logosRoute = express.Router()
//
const { selectAll } = require('../controllers/logos-controllers')

logosRoute.get('/', selectAll)

module.exports = { logosRoute }
