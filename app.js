//Importing Package
const express = require('express');

//Importing files
const routerRestaurants = require('./routes/routerRestaurants')

// create server
const app = express();


//Server config

app.use('/',routerRestaurants);



//server listner
app.listen(8900,()=>{
    console.log(`SERVER is running at 8900 PORT`);
})


