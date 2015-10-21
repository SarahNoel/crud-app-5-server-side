var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Meal = new Schema ({
  title: String,
  type: String,
  ingredients: String,
  });



module.exports = mongoose.model('meals', Meal);
