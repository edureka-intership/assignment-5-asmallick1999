const restaurantData = require('../models/restaurantdata.json')


// Assignment 5 -> Question 1

exports.getRestaurantData = (req, res)=>{
    res.status(200).json({
        message: "Successfully getting data",
        data:restaurantData
    })
}


exports.getRestaurantsByCityName = (req,res)=>{

    const filterResturantsByCityName = restaurantData.filter(item=>item.city_name == req.params.cityName)
    filterResturantsByCityName.length?
    res.status(200).json({
        message: "Successfully getting Restaurants Details By City Name",
        data : filterResturantsByCityName
    }):
    res.send("Sorry No restaurant is found")
}