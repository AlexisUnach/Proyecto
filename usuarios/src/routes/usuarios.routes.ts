import express from 'express';
import {getAllUsuarios, getusuariosconsultorio} from '../controllers/usuarios.controllers'
const router = express.Router();

// Tus rutas aquí
router.get("/usuarios/consultorio", getusuariosconsultorio);
router.get("/usuarios/all", getAllUsuarios);


export default router;