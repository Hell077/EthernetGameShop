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

router.delete('/api/Catalog/:id', async (req, res) => {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid ID' });
    }

    try {
        const db = await getDB();
        const catalogCollection = db.collection('Catalog');

        const result = await catalogCollection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Item not found' });
        }

        res.json({ message: 'Item deleted successfully' });
    } catch (error) {
        console.error('Error deleting catalog item:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;
