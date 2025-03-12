import express from 'express';
import {getusuariosconsultorio} from '../controllers/usuarios.controllers'
const router = express.Router();
import {getusuariosAll} from '../controllers/usuarios2.controllers'


// Tus rutas aquí
router.get("/usuarios/consultorio", getusuariosconsultorio);
router.get("/usuarios/all", getusuariosAll);


export default router;