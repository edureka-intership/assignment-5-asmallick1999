const mealType = require('../models/MealType.json')

exports.getAllMealType = (req, res) => {
    res.status(200).json({
        message: "Successfully Showing all Meal Type",
        data: mealType
    })
}