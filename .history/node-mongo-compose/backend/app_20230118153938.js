const express = require('express')
const restful = require('restful')
const server = express()
const mongoose = restful.mongoose

//Database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb')