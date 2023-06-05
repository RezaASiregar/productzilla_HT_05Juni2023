const express = require('express');




const mahasiswaRoutes = require('./src/routes/mahasiswaRoutes');
const mataKuliahRoutes = require('./src/routes/mataKuliahRoutes');
const db = require('./src/database');


db.connect().catch(console.log);

const app = express();

app.use(express.json());
app.use('/mahasiswa', mahasiswaRoutes);
app.use('/matakuliah', mataKuliahRoutes);

const PORT = 3000;
app.listen(PORT);
console.log('application running on port', PORT);