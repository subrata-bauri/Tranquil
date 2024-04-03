const mongoose = require('mongoose');
const Schema = mongoose.Schema

const appointmentSchema = new Schema({
    department: { type: String, required: true },
    doctor: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    date: { type: Number, required: true },
    time : { type: Number, required: true }
},{ timestamps: true })

module.exports = mongoose.model('appointment', appointmentSchema)
