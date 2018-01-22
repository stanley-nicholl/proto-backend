const router = require('express').Router()
const { usersController } = require('../controllers')

//returns all users
router.get('/', usersController.index)

//returns one users
router.get('/:id', usersController.showOne)

//creates one users
router.post('/', usersController.create)

//updates one users
router.put('/:id', usersController.update)

//deletes one users
router.delete('/:id', usersController.destroy)

module.exports = router
