import express from 'express';
import dotenv from 'dotenv';
import productosRoutes from './routes/usuarios.routes';

dotenv.config({ path: "./src/.env" });

const app = express();
const port = process.env.PORT;

//--->
app.use(express.json());

app.use('/', productosRoutes);

app.listen(port, () => {
    console.log("Servicio de Productos funcionando!", port);
});