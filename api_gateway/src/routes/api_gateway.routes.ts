import express from 'express';
import {getProductos,getAllProductos} from '../controllers/api_gateway.controllers'
const router = express.Router();

// Tus rutas aquí
router.get("/api_gateway/all", getAllProductos);

export default router;