const schemaMataKuliah = require('../database/mataKuliah')

async function getMataKuliah(req, res){
    const data = await schemaMataKuliah.find({});
    res.send(data);
}
function addMataKuliah(req, res){
    res.send({message: 'not implemented'});
}

async function addMataKuliah(req, res){
    const newMataKuliah = {
        code: req.body.code,
        name: req.body.name,
        sks: req.body.sks,
        class: req.body.class,
    };
    const MataKuliah = new schemaMataKuliah(newMataKuliah);
    const respone = await MataKuliah.save();
    res.send(respone);
}

async function updateOne(req, res){
    const id = req.params.id;
    const newMataKuliah = {
        code: req.body.code,
        name: req.body.name,
        sks: req.body.sks,
        class: req.body.class,
    };
    const response = await schemaMataKuliah.findByIdandUpdate(id, newMataKuliah);
    res.send(response);
}

async function deleteOne(req, res){
    const id = req.params.id;
    const response = await schemaMataKuliah.findByIdandDelete(id);
    res.send(response);
}

module.exports = {
    getMataKuliah,
    addMataKuliah,
    updateOne,
    deleteOne,
};