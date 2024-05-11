const User = require('./userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {name, email, password, role } = req.body

  try {
    const user = await User.signup(name, email, password, role )

    // create a token
    const token = createToken(user._id)

    res.status(200).json({name: user.name, email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// Get user profile
const getUserProfile = async (req, res) => {
  // Access user information from the request object
  const { _id, role } = req.user;

  try {
      const user = await User.findOne({ _id }).select('-password');

      if (!user) {
          throw new Error('User not found');
      }

      res.status(200).json({ user });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
}

module.exports = { signupUser, loginUser, getUserProfile }