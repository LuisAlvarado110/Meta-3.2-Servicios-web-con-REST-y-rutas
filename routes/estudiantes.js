const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController');

router.use(express.json());

router.get('/estudiantes', estudiantesController.getAllEstudiantes);
router.get('/estudiantes/:id', estudiantesController.getEstudiante);
router.post('/estudiantes', estudiantesController.createEstudiante);
router.put('/estudiantes/:id', estudiantesController.updateEstudiante);
router.patch('/estudiantes/:id', estudiantesController.updateEstudiante);
router.delete('/estudiantes/:id', estudiantesController.deleteEstudiante);

router.patch('/estudiantes/:id/enroll', estudiantesController.enrollEstudiante);
router.patch('/estudiantes/:id/disenroll', estudiantesController.disenrollEstudiante);

module.exports = router;