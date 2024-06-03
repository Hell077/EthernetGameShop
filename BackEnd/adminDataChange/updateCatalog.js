import express from 'express';
import { getDB } from '../mongoDb.js';

const router = express.Router();

router.put('/api/Catalog/:id', async (req, res) => {
    try {
        const db = await getDB();
        const catalogCollection = db.collection('Catalog');

        const { id } = req.params;
        const { Name, ImageLink, Price, Tags } = req.body;

        const updatedData = { Name, ImageLink, Price, Tags };
        const result = await catalogCollection.updateOne({ _id: id }, { $set: updatedData });

        if (result.modifiedCount === 0) {
            throw new Error('Failed to update Catalog data');
        }

        res.status(200).json({ message: 'Catalog data updated successfully' });
    } catch (error) {
        console.error('Error updating Catalog data:', error);
        res.status(500).json({ message: 'Error updating Catalog data' });
    }
});

export default router;
