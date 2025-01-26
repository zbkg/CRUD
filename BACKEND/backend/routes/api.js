const express = require('express');
const router = express.Router();

// Ejemplo de datos
let estudiantes = [
    { id: 1, nombre: 'Juan', edad: 18 },
    { id: 2, nombre: 'Ana', edad: 19 },
];

// Obtener todos los estudiantes
router.get('/estudiantes', (req, res) => {
    res.json(estudiantes);
});

// Crear un nuevo estudiante
router.post('/estudiantes', (req, res) => {
    const nuevoEstudiante = req.body;
    estudiantes.push(nuevoEstudiante);
    res.status(201).json(nuevoEstudiante);
});

// Actualizar un estudiante
router.put('/estudiantes/:id', (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    estudiantes = estudiantes.map(est =>
        est.id == id ? { ...est, ...datosActualizados } : est
    );
    res.json({ mensaje: 'Estudiante actualizado' });
});

// Eliminar un estudiante
router.delete('/estudiantes/:id', (req, res) => {
    const { id } = req.params;
    estudiantes = estudiantes.filter(est => est.id != id);
    res.json({ mensaje: 'Estudiante eliminado' });
});

module.exports = router;
