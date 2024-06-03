import express from 'express';
import { getDB } from '../mongoDb.js';

const router = express.Router();

router.post('/api/Catalog', async (req, res) => {
    try {
        const db = await getDB();
        const catalogCollection = db.collection('Catalog');

        const newItem = req.body;
        const result = await catalogCollection.insertOne(newItem);

        if (result.insertedCount === 1) {
            const insertedItem = result.ops[0];
            res.status(201).json(insertedItem);
        } else {
            throw new Error('Failed to insert new Catalog item');
        }
    } catch (error) {
        console.error('Error adding new Catalog item:', error);
        res.status(500).json({ message: 'Error adding new Catalog item' });
    }
});

export default router;
