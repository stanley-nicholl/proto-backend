const Controller = require('./controller')('prototypes') //Plan is the model name
const { prototypesModel } = require('../models')

class prototypesController extends Controller {

  static indexReviews (req, res, next) {
    console.log(req.params.id);
    prototypesModel.getReviews(req.params.id)
    .then(response => res.status(200).json({ Reviews: response }))
    .catch(next)
  }

  static createReview (req, res, next) {
    prototypesModel.createReview(req.body)
    .then(response => res.status(200).json({ Review: response }))
    .catch(next)
  }

}

module.exports = prototypesController
