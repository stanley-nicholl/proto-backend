const router = require('express').Router()
const { prototypesController } = require('../controllers')

//returns all prototypes
router.get('/', prototypesController.index)

//returns one prototype
router.get('/:id', prototypesController.showOne)

//returns all reviews for one prototype
router.get('/:id/reviews', prototypesController.indexReviews)

//creates one prototype
router.post('/', prototypesController.create)

//creates one prototype review
router.post('/reviews', prototypesController.createReview)

//updates one prototype
router.put('/:id', prototypesController.update)

//deletes one prototype
router.delete('/:id', prototypesController.destroy)

module.exports = router
