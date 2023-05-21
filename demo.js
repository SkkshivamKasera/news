const mongoose = require('mongoose')

const demoData = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    urlToImage: {
        type: String,
    },
    publishedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('news', demoData)