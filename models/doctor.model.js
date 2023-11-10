const mongoose = require('mongoose');

// Define the Doctor schema
const doctorSchema = new mongoose.Schema({
    name: String,
    image: String,
    specialization: String,
    experience: Number,
    location: String,
    date: Date,
    slots: Number,
    fee: Number,
});

// Create the Doctor model
const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
