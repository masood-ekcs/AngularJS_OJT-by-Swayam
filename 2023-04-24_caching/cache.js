// schema
const mongoose = require('mongoose')

// creating a new schema for the db
const cacheSchema = new mongoose.Schema({
    cache: {
        type: String
    }
})


// creating a new db 'cache' in the db using the created schema
module.exports = mongoose.model('cache', cacheSchema)
