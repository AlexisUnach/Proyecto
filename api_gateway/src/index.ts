import express from 'express';
import dotenv from 'dotenv';
import productosRoutes from './routes/api_gateway.routes';
import axios from 'axios';

dotenv.config({ path: "./src/.env" });

const app = express();
const port = process.env.PORT;


//rutas productos
app.get("/productos/all", async (req, res) => {
    const respuesta = await axios.get("http://localhost:3001/productos/all");
    res.send({"Los productos son": respuesta.data})
});
app.get("/all", async (req, res) => {
    const respuesta = await axios.get("http://localhost:3001/all");
    res.send({"Los productos son": respuesta.data})
});
//rutas usuarios
app.get("/usuarios/consultorio", async (req, res) => {
    const respuesta = await axios.get("http://localhost:3002/usuarios/consultorio");
    res.send({"Los productos son": respuesta.data})
});

app.get("/usuarios/all", async (req, res) => {
    const respuesta = await axios.get("http://localhost:3002/usuarios/all");
    res.send({"Los productos son": respuesta.data})
});





app.use('/', productosRoutes);

app.listen(port, () => {
    console.log("Servicio de Productos funcionando!", port);
}); 

//------------------------------