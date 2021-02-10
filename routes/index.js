const express = require('express')
const router = express.Router()
//
const { usersRoute } = require('./users-route')
const { settingsRoute } = require('./setting-route')
const { categoriesRoute } = require('./categories-route')
const { cardsRoute } = require('./cards-route')
const { logosRoute } = require('./logos-route')

router.get('/', async (req, res, next) => {
  return res.status(200).json({ message: 'welcome api' })
})
router.use('/users', usersRoute)
router.use('/settings', settingsRoute)
router.use('/categories', categoriesRoute)
router.use('/cards', cardsRoute)
router.use('/logos', logosRoute)

module.exports = router
