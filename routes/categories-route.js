const express = require('express')
const categoriesRoute = express.Router()
//
const { selectAll } = require('../controllers/categories-controllers')

categoriesRoute.get('/', selectAll)

module.exports = { categoriesRoute }
