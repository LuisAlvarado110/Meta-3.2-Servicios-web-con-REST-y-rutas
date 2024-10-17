const express = require('express');
const router = express.Router();
const cursosController = require('../controllers/cursosController');

router.use(express.json());

router.get('/cursos', cursosController.getAllCursos);
router.get('/cursos/:id', cursosController.getCurso);
router.post('/cursos', cursosController.createCurso);
router.put('/cursos/:id', cursosController.updateCurso);
router.patch('/cursos/:id', cursosController.updateCurso);
router.delete('/cursos/:id', cursosController.deleteCurso);

module.exports = router;