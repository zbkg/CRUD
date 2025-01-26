// URL base del backend
const API_URL = 'http://localhost:3000/api/estudiantes';

// Obtener estudiantes
fetch(API_URL)
  .then(response => response.json())
  .then(data => console.log('Estudiantes:', data))
  .catch(error => console.error('Error:', error));

// Agregar un estudiante
const nuevoEstudiante = { id: 3, nombre: 'Luis', edad: 20 };
fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(nuevoEstudiante),
})
  .then(response => response.json())
  .then(data => console.log('Estudiante agregado:', data))
  .catch(error => console.error('Error:', error));
