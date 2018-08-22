let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Star'

let schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: 'No Description Choose your own fate!'
    },
    color: {
        type: String,
        enum: [
            'red',
            'yellow',
            'blue',
            'orange',
            'white',
            'black',
        ],
        required: true
    },

    galaxyId: {
        type: ObjectId,
        ref: 'Galaxy',
        required: true
    }
//get by planet would be starId: ref: 'Star'

})

module.exports = mongoose.model(schemaName, schema)