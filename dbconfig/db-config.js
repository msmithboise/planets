let mongoose = require('mongoose')
const connectionString = ''
let connection = mongoose.connection


mongoose.connect(connectionString, {
    useNewUrlParser: true
})

connection.on('error', err => {
    console.log("DATABASE ERROR: ", err)
})

connection.once('open',() => {
    console.log("Connected to Database")
})