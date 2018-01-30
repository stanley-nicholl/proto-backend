const router = require('express').Router()
const { usersController, authController } = require('../controllers')

//returns all users
router.get('/', authController.isAdmin, usersController.index)

//returns one user using token to id
router.get('/fromtoken', usersController.showOneFromToken)

//returns one user
router.get('/:id', authController.isAdmin, usersController.showOne)

//creates one users
router.post('/', authController.isAdmin, usersController.create, usersController.createAdmin)

//updates one users
router.put('/:id', authController.isAdmin, usersController.update)

//deletes one users
router.delete('/:id', authController.isAdmin, usersController.destroy)

module.exports = router
