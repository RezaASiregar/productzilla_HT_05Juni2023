const mongoose = require('mongoose');

const mahasiswa = new mongoose.Schema({
    name: String,
    nim: Number,
    class: String,
    gender: String,
});

module.exports = mongoose.model('mahasiswa', mahasiswa);