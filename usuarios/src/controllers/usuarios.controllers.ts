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