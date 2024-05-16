// Require necessary packages
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

// Require middleware
const requireAuth = require('./src/requireAuth')

// Require route files
const userRoutes = require('./src/user')

// express app
const app = express()

// middleware
app.use(express.json())

// Middleware for logging requests
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.get('/', (req, res) => {
  res.send('Hello Auth service');
});
app.use('/api/user', userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 

