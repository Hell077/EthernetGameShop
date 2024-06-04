import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Carts.module.css';

function Carts() {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/carts'); // Укажите правильный URL для запроса
                setCarts(response.data);
            } catch (error) {
                console.error('Ошибка получения данных:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={style.container}>
            <h2>Корзины пользователей</h2>
            <table className={style.table}>
                <thead>
                <tr>
                    <th>ID корзины</th>
                    <th>Логин пользователя</th>
                    <th>ID товара</th>
                    <th>Название товара</th>
                    <th>Цена</th>
                    <th>Количество</th>
                </tr>
                </thead>
                <tbody>
                {carts.map((cart) => (
                    <tr key={cart._id}>
                        <td>{cart._id || 'N/A'}</td>
                        <td>{cart.login || 'N/A'}</td>
                        <td>{cart.cart[0]?.productId || 'N/A'}</td>
                        <td>{cart.cart[0]?.productName || 'N/A'}</td>
                        <td>{cart.cart[0]?.price || 'N/A'}</td>
                        <td>{cart.cart[0]?.quantity || 'N/A'}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Carts;
