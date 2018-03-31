const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

var events = require('./routes/eventsRoute')

const server = express()

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/events', events)

module.exports = server
