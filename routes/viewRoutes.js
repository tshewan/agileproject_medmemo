const express = require('express')
const router =express.Router()
const viewController = require('./../controllers/viewController')
const authController = require('./../controllers/authController')

router.get('/', viewController.getHome)
router.get('/login', viewController.getLoginForm)
router.get('/signup', viewController.getSignUpForm)
router.get('/me', viewController.getProfile)
router.get('/me', authController.protect, viewController.getProfile)

module.exports = router