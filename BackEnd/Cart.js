import express from 'express';
import { getDB } from './mongoDb.js';

const router = express.Router();


router.get('/cart', async (req, res) => {
    const db = getDB();
    const login = req.query.login;

    if (!login) {
        return res.status(400).json({ error: 'Не указан логин' });
    }

    try {
        const userCart = await db.collection('carts').findOne({ login });
        if (userCart) {
            res.json(userCart);
        } else {
            res.status(404).json({ error: 'Корзина не найдена' });
        }
    } catch (error) {
        console.error('Ошибка при получении корзины:', error);
        res.status(500).json({ error: 'Ошибка при получении корзины' });
    }
});
router.post('/cart/add', async (req, res) => {
    const db = getDB();
    const { login, productId, quantity } = req.body;

    try {
        const userCart = await db.collection('carts').findOne({ login });
        if (userCart) {
            const existingProductIndex = userCart.cart.findIndex(item => item.productId === productId);
            if (existingProductIndex !== -1) {
                userCart.cart[existingProductIndex].quantity += quantity;
            } else {
                userCart.cart.push({ productId, quantity });
            }
            await db.collection('carts').updateOne({ login }, { $set: { cart: userCart.cart } });
        } else {
            await db.collection('carts').insertOne({ login, cart: [{ productId, quantity }] });
        }
        res.json({ message: 'Товар успешно добавлен в корзину' });
    } catch (error) {
        console.error('Ошибка при добавлении товара в корзину:', error);
        res.status(500).json({ error: 'Ошибка при добавлении товара в корзину' });
    }
});

router.post('/cart/remove', async (req, res) => {
    const db = getDB();
    const { login, productId } = req.body;

    try {
        const userCart = await db.collection('carts').findOne({ login });
        if (userCart) {
            userCart.cart = userCart.cart.filter(item => item.productId !== productId);
            await db.collection('carts').updateOne({ login }, { $set: { cart: userCart.cart } });
            res.json({ message: 'Товар успешно удален из корзины' });
        } else {
            res.status(404).json({ error: 'Корзина не найдена' });
        }
    } catch (error) {
        console.error('Ошибка при удалении товара из корзины:', error);
        res.status(500).json({ error: 'Ошибка при удалении товара из корзины' });
    }
});

export default router;