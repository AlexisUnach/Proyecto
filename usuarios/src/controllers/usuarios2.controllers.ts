import { Request, Response } from 'express';
import pool from '../models/db';
import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';

// Definimos el tipo para un usuario, extendiendo RowDataPacket
interface Usuario extends RowDataPacket {
  id: number;
  nombre: string;
  especialidad: string;
}

export const getusuariosAll = async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query<Usuario[]>('SELECT * FROM usuarios');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Función para POST (ajustada para id autoincremental)
export const createUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = Array.isArray(req.body) ? req.body : [req.body];

    if (usuarios.length === 0) {
      res.status(400).json({
        message: "No se proporcionaron usuarios para crear",
        error: true
      });
      return;
    }

    for (const usuario of usuarios) {
      if (!usuario.nombre || !usuario.especialidad) {
        res.status(400).json({
          message: "Faltan datos (nombre o especialidad) para crear",
          error: true
        });
        return;
      }
    }

    const values = usuarios.map(u => [u.nombre, u.especialidad]);
    const [result] = await pool.query<ResultSetHeader>(
      'INSERT INTO usuarios (nombre, especialidad) VALUES ?',
      [values]
    );

    res.status(201).json({
      message: "Usuarios creados exitosamente",
      data: result
    });
  } catch (error) {
    console.error('Error al crear usuarios:', error);
    res.status(500).json({
      message: "Error al crear usuarios",
      error: true
    });
  }
};

// Función para PUT
export const updateUsuario = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nombre, especialidad } = req.body;

    if (!nombre || !especialidad) {
      res.status(400).json({
        message: "Faltan datos (nombre o especialidad) para actualizar",
        error: true
      });
      return;
    }

    const [result] = await pool.query<ResultSetHeader>(
      'UPDATE usuarios SET nombre = ?, especialidad = ? WHERE id = ?',
      [nombre, especialidad, id]
    );

    if (result.affectedRows === 0) {
      res.status(404).json({
        message: "Usuario no encontrado",
        error: true
      });
      return;
    }

    res.status(200).json({
      message: "Usuario actualizado exitosamente",
      data: result
    });
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).json({
      message: "Error al actualizar usuario",
      error: true
    });
  }
};

// Función para DELETE
export const deleteUsuario = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const [result] = await pool.query<ResultSetHeader>(
      'DELETE FROM usuarios WHERE id = ?',
      [id]
    );

    if (result.affectedRows === 0) {
      res.status(404).json({
        message: "Usuario no encontrado",
        error: true
      });
      return;
    }

    res.status(200).json({
      message: "Usuario eliminado exitosamente",
      data: result
    });
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    res.status(500).json({
      message: "Error al eliminar usuario",
      error: true
    });
  }
};

// Función para GET por ID
export const getUsuarioById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query<Usuario[]>('SELECT * FROM usuarios WHERE id = ?', [id]);
    if (rows.length === 0) {
      res.status(404).json({
        message: "Usuario no encontrado",
        error: true
      });
      return;
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    res.status(500).json({
      message: "Error al obtener el usuario",
      error: true
    });
  }
};