import express from 'express';
import { getDB } from '../mongoDb.js';

const router = express.Router();

router.get('/api/users', async (req, res) => {
    try {
        const db = await getDB();
        const catalogCollection = db.collection('users');
        const catalog = await catalogCollection.find().toArray();
        res.status(200).json(catalog);
    } catch (error) {
        console.error('Ошибка', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
});

export default router;
