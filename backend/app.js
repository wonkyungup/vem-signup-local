import {
    initializeDb,
    disconnectDb
} from './Model/db'

const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const app = express()

initializeDb()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/login', require('./routes/login'))
app.use('/login/signup', require('./routes/signup'))

// express stop or close db disconnect
// how watch ?

module.exports = app
