let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Specimen'

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
            'brow',
            'yellow',
            'white',
            'black',
        ],
        required: true
    },

    galaxyId: {
        type: ObjectId,
        ref: 'Galaxy',
        required: true
    },

    starId: {
        type: ObjectId,
        ref: 'Star',
        required: true
    },

    planetId: {
        type: ObjectId,
        ref: 'Planet',
        required: true
    },

    moonId: {
        type: ObjectId,
        ref: 'Moon',
        required: true
    }




//get by planet would be starId: ref: 'Star'

})

module.exports = mongoose.model(schemaName, schema)