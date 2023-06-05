const express = require('express');
const app = express.Router();

const mataKuliahCTL = require('../controller/mahasiswaController');


app.get('/', mataKuliahCTL.getMahasiswa);
app.post('/', mataKuliahCTL.addMahasiswa);
app.put('/:id', mataKuliahCTL.updateOne);
app.delete('/:id', mataKuliahCTL.deleteOne);

module.exports = app;