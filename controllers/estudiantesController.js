const modelo = require('../models/estudiantesModel'); // Asegúrate de que la ruta sea correcta

const deleteEstudiante = function (req,res) {
    if(modelo.erase(req.params.id)){
        res.status(200).
            json({msg:`Id: ${req.params.id} borrado exitosamente`})
    } else {
        res.status(500).
            json({error:`No se pudo borrar el id: ${req.params.id}`})
    }
};


const getAllEstudiantes = (req, res) => {
    const estudiantes = modelo.findAll();
    res.status(200).json(estudiantes);
};

const getEstudiante = (req, res) => {
    const estudiante = modelo.findById(req.params.id);
    if (estudiante) {
        res.status(200).json(estudiante);
    } else {
        res.status(404).json({ error: `Estudiante con id ${req.params.id} no encontrado` });
    }
};

const createEstudiante = (req, res) => {
    const newEstudiante = req.body; // Obtiene los datos del nuevo estudiante desde el cuerpo de la solicitud
    newEstudiante.id = String(modelo.findAll().length + 1); // Genera un ID simple
    modelo.add(newEstudiante); // Agrega el nuevo estudiante al modelo
    res.status(201).json(newEstudiante); // Responde con el nuevo estudiante y un código de estado 201
};

const updateEstudiante = (req, res) => {
    const updatedEstudiante = modelo.save(req.params.id, req.body);
    if (updatedEstudiante) {
        res.status(200).json(updatedEstudiante);
    } else {
        res.status(404).json({ error: `Estudiante con id ${req.params.id} no encontrado` });
    }
};

exports.getAllEstudiantes = getAllEstudiantes;
exports.getEstudiante = getEstudiante;
exports.createEstudiante = createEstudiante;
exports.updateEstudiante = updateEstudiante;
exports.deleteEstudiante = deleteEstudiante;