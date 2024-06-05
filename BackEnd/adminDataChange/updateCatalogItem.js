import express from 'express';
import { getDB } from '../mongoDb.js';
import { ObjectId } from 'mongodb';

const router = express.Router();

router.put('/api/UpdateCatalog', async (req, res) => {
    const { _id, Name, ImageLink, Price, Tags, Title } = req.body;

    if (!_id || !ObjectId.isValid(_id)) {
        return res.status(400).json({ message: 'Invalid ID' });
    }

    try {
        const db = await getDB();
        const catalogCollection = db.collection('Catalog');

        const updatedItem = await catalogCollection.findOneAndUpdate(
            { _id: new ObjectId(_id) },
            { $set: { Name, ImageLink, Price, Tags, Title } },
            { returnOriginal: false }
        );

        if (!updatedItem.value) {
            return res.status(404).json({ message: 'Item not found' });
        }

        res.json(updatedItem.value);
    } catch (error) {
        console.error('Error updating catalog item:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;
