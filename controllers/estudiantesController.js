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

//Dar de alta a un estudiante
const enrollEstudiante = function (req, res) {
    const estudianteId = parseInt(req.params.id);
    const cursoId = parseInt(req.body.cursoId);

    let estudiante = modelo.estudiantes.findById(estudianteId);
    
    if (!estudiante) {
        return res.status(404).json({ error: 'Estudiante no encontrado' });
    }

    let curso = modelo.cursos.findById(cursoId);
    
    if (!curso) {
        return res.status(404).json({ error: 'Curso no encontrado' });
    }

    if (!estudiante.cursosInscritos.includes(cursoId)) {
        estudiante.cursosInscritos.push(cursoId);  
        modelo.estudiantes.update(estudianteId, estudiante); 
    }

    res.status(200).json({
        msg: 'Estudiante inscrito exitosamente',
        cursosInscritos: estudiante.cursosInscritos  
    });
};

// Metodo para dar de baja a un estudiante de un curso
const disenrollEstudiante = function (req, res) {
    const estudianteId = parseInt(req.params.id);
    const cursoId = parseInt(req.body.cursoId);

    let estudiante = modelo.estudiantes.findById(estudianteId);

    if (!estudiante) {
        return res.status(404).json({ error: 'Estudiante no encontrado' });
    }

    let curso = modelo.cursos.findById(cursoId);
    
    if (!curso) {
        return res.status(404).json({ error: 'Curso no encontrado' });
    }

    estudiante.cursosInscritos = estudiante.cursosInscritos.filter(id => id !== cursoId);  

    modelo.estudiantes.update(estudianteId, estudiante); 

    res.status(200).json({
        msg: 'Estudiante desinscrito exitosamente',
        cursosInscritos: estudiante.cursosInscritos  
    });
};

exports.getAllEstudiantes = getAllEstudiantes;
exports.getEstudiante = getEstudiante;
exports.createEstudiante = createEstudiante;
exports.updateEstudiante = updateEstudiante;
exports.deleteEstudiante = deleteEstudiante;

exports.enrollEstudiante = enrollEstudiante;
exports.disenrollEstudiante = disenrollEstudiante;