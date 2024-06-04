import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Carts.module.css';

function Carts() {
    const [carts, setCarts] = useState([]);
    const [expandedCarts, setExpandedCarts] = useState({});

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

    const toggleExpand = (cartId) => {
        setExpandedCarts((prev) => ({
            ...prev,
            [cartId]: !prev[cartId],
        }));
    };

    return (
        <div className={style.container}>
            <h2>Корзины пользователей</h2>
            <table className={style.table}>
                <thead>
                <tr>
                    <th>ID корзины</th>
                    <th>Логин пользователя</th>
                    <th>Действие</th>
                </tr>
                </thead>
                <tbody>
                {carts.map((cart) => (
                    <React.Fragment key={cart._id}>
                        <tr>
                            <td>{cart._id || 'N/A'}</td>
                            <td>{cart.login || 'N/A'}</td>
                            <td>
                                <button onClick={() => toggleExpand(cart._id)}>
                                    {expandedCarts[cart._id] ? 'Свернуть' : 'Развернуть'}
                                </button>
                            </td>
                        </tr>
                        {expandedCarts[cart._id] && (
                            <tr>
                                <td colSpan="3">
                                    <table className={style.innerTable}>
                                        <thead>
                                        <tr>
                                            <th>ID товара</th>
                                            <th>Название товара</th>
                                            <th>Цена</th>
                                            <th>Количество</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {cart.cart.map((product, index) => (
                                            <tr key={`${cart._id}-${index}`}>
                                                <td>{product.productId || 'N/A'}</td>
                                                <td>{product.productName || 'N/A'}</td>
                                                <td>{product.price || 'N/A'}</td>
                                                <td>{product.quantity || 'N/A'}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        )}
                    </React.Fragment>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Carts;
