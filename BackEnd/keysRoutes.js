// keysRoutes.js
import express from 'express';
import { getDB } from './mongoDb.js';

const router = express.Router();

router.post('/generate-keys', async (req, res) => {
    const db = getDB();
    const { login } = req.body;

    try {
        // Получаем данные корзины пользователя
        const cart = await db.collection('carts').findOne({ login });

        if (!cart || !cart.cart || cart.cart.length === 0) {
            return res.status(400).json({ success: false, error: 'Корзина пустая или не найдена' });
        }

        const keys = cart.cart.map(item => ({
            Name: generateKey(),
            Game: item.productName
        }));


        await db.collection('userKeys').updateOne(
            { Login: login },
            { $push: { Keys: { $each: keys } } },
            { upsert: true }
        );

        // Очищаем корзину пользователя
        await db.collection('carts').deleteOne({ login });

        res.status(200).json({ success: true, keys });
    } catch (error) {
        console.error('Ошибка при генерации ключей:', error);
        res.status(500).json({ success: false, error: 'Ошибка при генерации ключей' });
    }
});

router.get('/user-keys', async (req, res) => {
    const db = getDB();
    const { login } = req.query;

    try {
        const userKeys = await db.collection('userKeys').findOne({ Login: login });
        if (userKeys) {
            res.status(200).json({ keys: userKeys.Keys });
        } else {
            res.status(404).json({ error: 'Ключи не найдены' });
        }
    } catch (error) {
        console.error('Ошибка при получении ключей пользователя:', error);
        res.status(500).json({ error: 'Ошибка при получении ключей пользователя' });
    }
});

function generateKey() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let key = '';
    for (let i = 0; i < 20; i++) {
        key += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return key;
}

export default router;
