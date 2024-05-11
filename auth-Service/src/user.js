const express = require('express')

// controller functions
const { loginUser, signupUser, getUserProfile } = require('./userController')
const requireAuth = require('./requireAuth');

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// Get user profile route
router.get('/profile', requireAuth, getUserProfile);

module.exports = router