const modelo = require('../models/cursosModel');

const getAllCursos = (req, res) => {
    const cursos = modelo.findAll();
    res.status(200).json(cursos);
};

const getCurso = (req, res) => {
    const curso = modelo.findById(req.params.id);
    if (curso) {
        res.status(200).json(curso);
    } else {
        res.status(404).json({ error: `Curso con id ${req.params.id} no encontrado` });
    }
};

const createCurso = (req, res) => {
    const newCurso = req.body;
    modelo.add(newCurso);
    res.status(201).json(newCurso);
};

const updateCurso = (req, res) => {
    const updatedCurso = modelo.save(req.params.id, req.body);
    if (updatedCurso) {
        res.status(200).json(updatedCurso);
    } else {
        res.status(404).json({ error: `Curso con id ${req.params.id} no encontrado` });
    }
};

const deleteCurso = (req, res) => {
    if (modelo.erase(req.params.id)) {
        res.status(200).json({ msg: `Curso con id: ${req.params.id} eliminado exitosamente` });
    } else {
        res.status(500).json({ error: `No se pudo eliminar el curso con id: ${req.params.id}` });
    }
};

exports.getAllCursos = getAllCursos;
exports.getCurso = getCurso;
exports.createCurso = createCurso;
exports.updateCurso = updateCurso;
exports.deleteCurso = deleteCurso;