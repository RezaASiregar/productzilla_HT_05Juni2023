const schemaMahasiswa = require('../database/mahasiswa')

async function getMahasiswa(req, res){
    const data = await schemaMahasiswa.find({});
    res.send(data);
}

async function addMahasiswa(req, res){
    const newMahasiswa = {
        name: req.body.name,
        nim: req.body.nim,
        class: req.body.class,
        gender: req.body.gender,
    };
    const mahasiswa = new schemaMahasiswa(newMahasiswa);
    const respone = await mahasiswa.save();
    res.send(respone);
}

async function updateOne(req, res){
    const id = req.params.id;
    const newMahasiswa = {
        name: req.body.name,
        nim: req.body.nim,
        class: req.body.class,
        gender: req.body.gender,
    };
    const response = await schemaMahasiswa.findByIdandUpdate(id, newMahasiswa);
    res.send(response);
}

async function deleteOne(req, res){
    const id = req.params.id;
    const response = await schemaMahasiswa.findByIdandDelete(id);
    res.send(response);
}

module.exports = {
    getMahasiswa,
    addMahasiswa,
    updateOne,
    deleteOne,
};