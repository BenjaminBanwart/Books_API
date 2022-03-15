const mongoose = require('mongoose')

let bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    year: { type: Number, required: true },
    quantity: { type: Number, required: false },
    imageURL: { type: String, required: false }
})

module.exports = mongoose.model('Book', bookSchema)