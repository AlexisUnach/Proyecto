import express from 'express';
import {getProductos,getAllProductos} from '../controllers/productos.controllers'
const router = express.Router();

// Tus rutas aquí
router.get("/productos/all", getAllProductos);
router.get("/all", getProductos);

export default router;

//------------------------------