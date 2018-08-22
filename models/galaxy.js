let mongoose = require('mongoose')
let Schema = mongoose.Schema
let schemaName = 'Galaxy'

let schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: 'No Description Choose your own fate!'
    }
})

module.exports = mongoose.model(schemaName, schema)