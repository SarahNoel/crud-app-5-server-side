var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Meal = mongoose.model('meals');


//get all meals
router.get('/meals', function(req, res, next) {
  Meal.find(function(err, meals){
    if(err){
      res.json(err);
    }
    else{
      res.json(meals);
    }
  });
});

//add one meal
router.post('/meals', function(req, res, next){
  new Meal(req.body)
  .save(function(err, meal){
    res.json(meal);
  });
});

//get one meal
router.get('/meal/:id', function(req, res, next){
  Meal.findById(req.params.id, function(err, meal){
    if(err){
      res.json(err);
    }
    else{
      res.json(meal);
    }
  });
});

//update one meal
router.put('/meal/:id', function(req, res, next){
  var query = {'._id':req.params.id};
  var payload = req.body;
  var options = {new:true};
  Meal.findOneAndUpdate(query, payload, options, function(err, meal){
    if(err){
      res.json(err);
    }
    else{
      res.json(meal);
    }
  });
});


//delete one meal
router.delete('/meal/:id', function(req, res, next){
  var query = {'._id': req.params.id};
  Meal.findOneAndRemove(query, function(err, meal){
    if(err){
      res.json(err);
    }
    else{
      res.json({'Deleted':meal});
    }
  });
});


module.exports = router;
