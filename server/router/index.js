const Router = require('express').Router
const router = new Router()
const userController = require('../controllers/userController')
const { body } = require('express-validator')
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/registration', body('email').isEmail(), body('password').isLength({ min: 3, max: 32 }), userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.refresh)
router.get('/users', authMiddleware, userController.getUsers)

// const express = require('express')
// const router = express.Router({ mergeParams: true })

// router.use('/auth', require('./auth.routes'))
// router.use('/category', require('./category.routes'))
// router.use('/product', require('./product.routes'))
// router.use('/user', require('./user.routes'))

module.exports = router
