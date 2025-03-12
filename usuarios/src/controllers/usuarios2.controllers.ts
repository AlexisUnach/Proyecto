import { Request, Response } from 'express';
import pool from '../models/db'; // Importa la conexión a la base de datos

export const getusuariosAll= async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query('SELECT * FROM usuarios');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).send('Error interno del servidor');
  }
};
