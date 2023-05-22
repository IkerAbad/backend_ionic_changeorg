const express = require('express');
const app = express();
const petitionRoute = express.Router();
let PetitionModel = require('../model/Petition');
// Add Petition
petitionRoute.route('/create-petition').post((req, res, next) => {
  PetitionModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get all petitions
petitionRoute.route('/').get((req, res) => {
  PetitionModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single petition
petitionRoute.route('/get-petition/:id').get((req, res) => {
  PetitionModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update petition
petitionRoute.route('/update-petition/:id').put((req, res, next) => {
  PetitionModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Petition successfully updated!')
    }
  })
})
// Delete petition
petitionRoute.route('/delete-petition/:id').delete((req, res, next) => {
  PetitionModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = petitionRoute;