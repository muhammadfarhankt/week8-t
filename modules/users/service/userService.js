const User = require('../models/User')

/**
 * creates a new user and returns it
 * @param {Object} userInput - it is iuser input with all variables for user model
 */

const addUser = async (userInput) => {
  const user = new User(userInput)
  await user.save()
  return user
}

// addUser object is exported which returns fn
module.exports = { addUser }
