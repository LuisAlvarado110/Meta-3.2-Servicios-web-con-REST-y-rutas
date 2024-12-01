let profesores = [
    { id: '1', nombre: 'Dr. John Smith', departamento: 'Software', cursosInscritos: [] },
    { id: '2', nombre: 'Dra. Lisa Brown', departamento: 'Hardware', cursosInscritos: [] },
    { id: '3', nombre: 'Dr. Miguel Gomez', departamento: 'IoT', cursosInscritos: [] }
];

let nextProfesorId = profesores.length + 1;

const findAll = () => profesores;

const findById = (id) => profesores.find(p => p.id === id);

const add = (newProfesor) => {
    const newId = nextProfesorId.toString();
    newProfesor.id = newId;
    profesores.push(newProfesor);
    nextProfesorId++;
};

const save = (id, data) => {
    let index = profesores.findIndex(p => p.id === id);
    if (index !== -1) {
        profesores[index] = { ...profesores[index], ...data };
        return profesores[index];
    }
    return null;
};

const erase = (id) => {
    const index = profesores.findIndex(p => p.id === id);
    if (index !== -1) {
        profesores.splice(index, 1);
        return true;
    }
    return false;
};

module.exports = {
    findAll,
    findById,
    add,
    save,
    erase
};
