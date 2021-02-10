require('dotenv').config()
const AdminBro = require('admin-bro')
const path = require('path')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroSequelize = require('@admin-bro/sequelize')
const express = require('express')

// Local imports
const { authenticate } = require('./admin/util')
const routes = require('./routes')

AdminBro.registerAdapter(AdminBroSequelize)

const adminBro = require('./admin')

const app = express()
//app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))
const port = process.env.APP_PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookiePassword: 'admin-panel-tutorial',
  authenticate,
})

app.use(adminBro.options.rootPath, router)
app.use(adminBro.options.loginPath, router)

// Registered Routes
app.use('/api', routes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
