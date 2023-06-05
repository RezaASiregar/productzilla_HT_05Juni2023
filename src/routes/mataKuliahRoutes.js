const express = require('express');
const app = express.Router();

const mataKuliahCTL = require('../controller/mataKuliahController');


app.get('/', mataKuliahCTL.getMataKuliah);
app.post('/', mataKuliahCTL.addMataKuliah);
app.put('/:id', mataKuliahCTL.updateOne);
app.delete('/:id', mataKuliahCTL.deleteOne);

module.exports = app;