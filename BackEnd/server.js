// server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connectDB } from './mongoDb.js';
import authRoutes from './authRoutes.js';
import Cart from './Cart.js';
import catalogRoutes from './catalogRoutes.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(authRoutes);
app.use(Cart);
app.use(catalogRoutes); // Подключаем новый маршрут

app.listen(port, () => {
  console.log(`Сервер запущен на порту localhost:${port}`);
  connectDB().catch(console.error);
});
