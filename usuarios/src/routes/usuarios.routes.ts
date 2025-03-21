import express from 'express';
import {getusuariosconsultorio} from '../controllers/usuarios.controllers'
import {getusuariosAll, createUsuarios, updateUsuario, deleteUsuario, getUsuarioById} from '../controllers/usuarios2.controllers'
const router = express.Router();


// Tus rutas aquí
router.get("/usuarios/consultorio", getusuariosconsultorio);
router.get("/usuarios/all", getusuariosAll);

//------------------------>
router.post("/usuarios/all", createUsuarios);

router.put("/usuarios/all/:id", updateUsuario);
router.delete("/usuarios/all/:id", deleteUsuario);
router.get("/usuarios/all/:id", getUsuarioById);
export default router;