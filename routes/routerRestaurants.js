// importing file
const express = require('express');

const restaurant = require('../controllers/restaurant')
const mealType = require('../controllers/mealType')


//server create
const routes = express()


//server config
routes.get('/widget',mealType.getAllMealType)
routes.get('/',restaurant.getRestaurantData)
routes.get('/:cityName',restaurant.getRestaurantsByCityName)




//export
module.exports = routes;

