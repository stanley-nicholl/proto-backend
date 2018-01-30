const express = require('express')
const router = express.Router()
const { authController } = require('../controllers')

// Login
// requires a body with { email, password }
// returns that user's token in a key/value object { Auth: token }
router.post('/signin', authController.signin)

router.post('/signup', authController.signup)

module.exports = router
