// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const { obtenerReservas, crearReservas, actualizarReserva,eliminarReservas } = require('../controllers/reserva.controllers');

const express = require('express');
const router = express.Router()


// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas

// Formulario para crear una reserva

// Formulario para actualizar una reserva

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api/',(req,res)=>{
    res.render('index');
});
 

router.get('/api/reservas/', obtenerReservas);


router.post('/api/reservas/',  crearReservas);

router.put('/api/tarea/:id', actualizarReserva);

router.delete('/api/tarea/:id', eliminarReservas);

 
 module.exports = router;