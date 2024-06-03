import express from 'express';
import { getDB } from '../mongoDb.js'; // Исправленный путь к mongoDb.js

const router = express.Router();

router.get('/api/carts', async (req, res) => { // Исправленный маршрут
    try {
        const db = await getDB();
        const cartsCollection = db.collection('carts'); // Исправлено название коллекции
        const carts = await cartsCollection.find().toArray(); // Исправлено название переменной
        res.status(200).json(carts);
    } catch (error) {
        console.error('Ошибка', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
});

export default router;
