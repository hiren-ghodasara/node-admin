const express = require('express')
const usersRoute = express.Router()
//
const usersControllers = require('../controllers/users-controllers')

usersRoute.get('/', usersControllers.selectAll)

module.exports = { usersRoute }
