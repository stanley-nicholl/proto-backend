const router = require('express').Router()
// const { authController, prototypesController } = require('../controllers')

//returns all prototypes
router.get('/', prototypesController.index)

//returns one prototype
router.get('/:id', prototypesController.showOne)

//creates one prototype
router.post('/', prototypesController.create)

//updates one prototype
router.put('/:id', prototypesController.update)

//deletes one prototype
router.delete('/:id', prototypesController.destroy)

module.exports = router
