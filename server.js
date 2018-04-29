// import a module used later
const path = require('path')

const DEFAULT_PORT = 3377
const WEBSITE_FOLDER = 'website'

const express = require('express')
const app = express()

// serve up website contents from the specified folder
const websitePath = path.join(__dirname, WEBSITE_FOLDER)
app.use(express.static(websitePath))

// start the web server listening on a port
const port = express.env.PORT || DEFAULT_PORT
app.listen(port)

console.log(`Server listening at port ${port}`)