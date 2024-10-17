const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesoresController');

router.use(express.json());

router.get('/profesores', profesoresController.getAllProfesores);
router.get('/profesores/:id', profesoresController.getProfesor);
router.post('/profesores', profesoresController.createProfesor);
router.put('/profesores/:id', profesoresController.updateProfesor);
router.patch('/profesores/:id', profesoresController.updateProfesor);
router.delete('/profesores/:id', profesoresController.deleteProfesor);

module.exports = router;
