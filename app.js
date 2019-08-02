var express = require('express')
var cors = require('cors')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var mongoose = require('mongoose')

var todoService = require('./routes/todo')

const dbUri = "mongodb+srv://<user>:<password>@cluster0-xnfos.mongodb.net/test?retryWrites=true&w=majority"

// initialize app
var app = express()

// applying middlewares
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// routing
app.use('/todo', todoService)

// database connection
mongoose.connect(dbUri, { useNewUrlParser: true })
const dbClient = mongoose.connection
dbClient.once('open', () => console.log('connected to the database'))

module.exports = app
