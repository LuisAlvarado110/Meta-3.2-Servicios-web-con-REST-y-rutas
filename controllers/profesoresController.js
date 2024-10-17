const modelo = require('../models/profesoresModel');
const getAllProfesores = (req, res) => {
    const profesores = modelo.findAll();
    res.status(200).json(profesores);
};

const getProfesor = (req, res) => {
    const profesor = modelo.findById(req.params.id);
    if (profesor) {
        res.status(200).json(profesor);
    } else {
        res.status(404).json({ error: `Profesor con id ${req.params.id} no encontrado` });
    }
};

const createProfesor = (req, res) => {
    const newProfesor = req.body;
    modelo.add(newProfesor);
    res.status(201).json(newProfesor);
};

const updateProfesor = (req, res) => {
    const updatedProfesor = modelo.save(req.params.id, req.body);
    if (updatedProfesor) {
        res.status(200).json(updatedProfesor);
    } else {
        res.status(404).json({ error: `Profesor con id ${req.params.id} no encontrado` });
    }
};

const deleteProfesor = (req, res) => {
    if (modelo.erase(req.params.id)) {
        res.status(200).json({ msg: `id: ${req.params.id} eliminado exitosamente` });
    } else {
        res.status(500).json({ error: `No se pudo eliminar id: ${req.params.id}` });
    }
};

exports.getAllProfesores = getAllProfesores;
exports.getProfesor = getProfesor;
exports.createProfesor = createProfesor;
exports.updateProfesor = updateProfesor;
exports.deleteProfesor = deleteProfesor;