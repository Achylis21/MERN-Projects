const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
}, { timestamps: true})

module.exports = mongoose.model('Workout', workoutSchema)