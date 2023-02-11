const express = require('express')
const router = express.Router()

const { addUser } = require('../modules/users/service/userService')

// require('../utils/db.config')

router.get('/register', (req, res) => {
  console.log('register page load')
  return res.render('register')
})

router.post('/register', async (req, res) => {
  try {
    const user = await addUser(req.body)
    if (user) console.log('created')
    else console.log('error')
    console.log('New account created')
    return res.render('register', { message: 'Created new account succesfully' })
  } catch (err) {
    console.error(err)
    // 400- front end error / client error (for example, malformed request syntax, invalid request message framing, or deceptive request routing).
    // 500 - back end error - server encountered an unexpected condition that prevented it from fulfilling the request.
    return res.status(400).render('register', { message: 'Something went wrong' })
  }
})

module.exports = router
