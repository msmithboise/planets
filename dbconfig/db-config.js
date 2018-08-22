let mongoose = require('mongoose')
const connectionString = 'mongodb://student:student1@ds018568.mlab.com:18568/planets'
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