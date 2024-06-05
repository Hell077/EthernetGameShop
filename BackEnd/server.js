// server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connectDB } from './mongoDb.js';
import authRoutes from './authRoutes.js';
import Cart from './Cart.js';
import catalogRoutes from './catalogRoutes.js';
import keysRoutes from './keysRoutes.js';
import dataCarts from './data/carts.data.js';
import userKeysData from './data/userKeys.data.js';
import CatalogData from './data/catalog.data.js';
import AddCatalogItem from './adminDataChange/addCatalogItem.js';
import usersData from './data/users.data.js';
import UpdateCatalogItem from "./adminDataChange/updateCatalogItem.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(authRoutes);
app.use(Cart);
app.use(catalogRoutes);
app.use(keysRoutes);
app.use(dataCarts);
app.use(userKeysData);
app.use(userKeysData);
app.use(CatalogData);
app.use(AddCatalogItem);
app.use(usersData);
app.use(UpdateCatalogItem);

app.listen(port, () => {
  console.log(`Сервер запущен на порту localhost:${port}`);
  connectDB().catch(console.error);
});
