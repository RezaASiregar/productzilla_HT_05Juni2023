const mongoose = require('mongoose');

const mataKuliah = new mongoose.Schema({
    kode: Number,
    name: String,
    sks: Number,
    class: String,
});

module.exports = mongoose.model('mataKuliah', mataKuliah);