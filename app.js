const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const path = require('path')

// Create app variable and setting it equals to express function 
// The express function to create the server 
const app = express()

// Create a port variable and setting it equals to the value of 3000
// This is the port the web server use
const port = 3000
const WEBSITE = 'website'

//Body Parser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// set static path
app.use(express.static(path.join(__dirname, WEBSITE)))

/**
 * Using the app variable to access the get function
 * the get function is used to create a route that direct traffic 
 * a route takes the user to the app that is being requested
 * the get function takes in two parameters
 * the first parameter is the request to the home page, which is represented by the /
 * the second parameter is the callback function which also takes in two paramters
 * the first is request and the second is the response
 */
app.get(WEBSITE, (request, response) =>{
    response.send('hello world')
})

/**
 * Using the varaible app to access the listen function
 * the listen function tell the server which port to listen for, 
 * as in where the request is coming from
 * the listen function takes in two parameters
 * the first parameter is the port, which is 3000 in this case
 * the second parameter is a callback function, which is used for 
 * telling the server what to do 
 * */ 
app.listen(port, ()=>{
    console.log(`Server started on Port ${port}...`)
})