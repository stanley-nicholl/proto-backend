const router = require('express').Router()
const { prototypesController, authController } = require('../controllers')

//returns all prototypes
router.get('/', authController.isAdmin, prototypesController.index)

//returns one prototype
router.get('/:id', prototypesController.showOne)

//returns all reviews for one prototype
router.get('/:id/reviews', authController.isAdmin, prototypesController.indexReviews)

//creates one prototype
router.post('/', authController.isAdmin, prototypesController.create)

//creates one prototype review
router.post('/reviews', prototypesController.createReview)

//updates one prototype
router.put('/:id', authController.isAdmin, prototypesController.update)

//deletes one prototype
router.delete('/:id', authController.isAdmin, prototypesController.destroy)

module.exports = router
