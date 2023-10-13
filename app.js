
const helloWord = require("./src/routes/HelloWorld/HelloWorld")
const express = require('express')
const error404 =require("./src/routes/404/404")
const path = require('path');
const app = express()
const port = 3000 || process.env.PORT 
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api/helloworld', helloWord)
app.use('/*',error404)


module.exports = {app,port};