// catalogRoutes.js
import express from 'express';
import { getDB } from './mongoDb.js';
import { ObjectId } from 'mongodb';

const router = express.Router();

router.get('/catalog', async (req, res) => {
    try {
        const db = await getDB();
        const catalogCollection = db.collection('Catalog');
        const catalog = await catalogCollection.find().toArray();
        res.status(200).json(catalog);
    } catch (error) {
        console.error('Ошибка при получении каталога:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
});

router.get('/catalog/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const db = await getDB();
        const catalogCollection = db.collection('Catalog');
        const game = await catalogCollection.findOne({ _id: new ObjectId(id) });
        if (game) {
            res.status(200).json(game);
        } else {
            res.status(404).json({ message: 'Игра не найдена' });
        }
    } catch (error) {
        console.error('Ошибка при получении данных игры:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
});

export default router;
