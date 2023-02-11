const moongose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = moongose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [2, 'Name can\'t be less than 2 characters'],
    maxlength: [64, 'Name can\'t be greater than 64 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    minlength: [6, 'Email can\'t be less than 6 characters'],
    maxlength: [64, 'Email can\'t be greater than 64 characters'],
    index: true
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) next()
  this.password = await bcrypt.hash(this.password, 5)
  next()
})

const User = moongose.model('users', userSchema)
/* users - collection name
*/
module.exports = User
