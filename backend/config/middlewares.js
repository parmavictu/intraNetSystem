const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')


module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors())
    app.use(express.static('/tmp'));
}