const express = require('express')
const cardsRoute = express.Router()
//
const { selectAll } = require('../controllers/cards-controllers')

cardsRoute.get('/', selectAll)

module.exports = { cardsRoute }
