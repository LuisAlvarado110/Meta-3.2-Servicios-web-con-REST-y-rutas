let cursos = [
    { id: '1', nombre: 'Sistemas de control', creditos: 6 },
    { id: '2', nombre: 'Electronica Aplicada', creditos: 4 },
    { id: '3', nombre: 'Desarrollo web', creditos: 3 }
];

let nextCursoId = cursos.length + 1;

const findAll = () => cursos;

const findById = (id) => cursos.find(c => c.id === id);

const add = (newCurso) => {
    const newId = nextCursoId.toString();
    newCurso.id = newId;
    cursos.push(newCurso);
    nextCursoId++;
};

const save = (id, data) => {
    let index = cursos.findIndex(c => c.id === id);
    if (index !== -1) {
        cursos[index] = { ...cursos[index], ...data };
        return cursos[index];
    }
    return null;
};

const erase = (id) => {
    const index = cursos.findIndex(c => c.id === id);
    if (index !== -1) {
        cursos.splice(index, 1);
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

