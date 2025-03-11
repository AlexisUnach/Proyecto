import { Request, Response } from 'express';
import pool from '../models/db'; // Importa la conexión a la base de datos

export const getusuariosconsultorio = async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query('SELECT * FROM usuarios');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).send('Error interno del servidor');
  }
};

export const getAllUsuarios = (req: Request, res: Response) => {
  res.send("Todos los usuarios corriendo");   
};









/*

import { Request, Response } from 'express';

export const getusuariosconsultorio = (req: Request, res: Response) => {
  res.json([
    {
        "id": "1",
        "nombre": "Dr. Ana López",
        "especialidad": "Neurología"
    },
    {
        "id": "2",
        "nombre": "Dr Juan Osorio",
        "especialidad": "Traumatologo"
    }
]);
};

export const getAllUsuarios = (req: Request, res: Response) => {
    res.send("Todos los usuarios corriendo");
};
*/