const express = require('express')
const bodyParser = require('body-parser')
require('./utils/db.config')

const authRoutes = require('./routes/authRoutes')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')

/* app var is a server. takes 0 as default
port, fn */
app.listen(3000, () => {
  console.log('Server started at Port 3000')
})

app.use('/', authRoutes)

app.get('/', (req, res) => {
  return res.render('index')
})

module.exports = app
