import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Cart.module.css';
import {useNavigate} from "react-router-dom";

function Cart() {
    const login = useSelector((state) => state.login.login);
    const [cartData, setCartData] = useState(null);
    const [cartError, setCartError] = useState(false);

    const navigate = useNavigate();

    const OpenCatalog = () =>{
        navigate('/catalog');
    }

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/cart?login=${login}`);
                if (response.status === 200) {
                    if (response.data.error && response.data.error === 'Корзина не найдена') {
                        setCartError(true);
                    } else {
                        setCartData(response.data);
                    }
                }
            } catch (error) {
                console.error('Ошибка при получении данных о корзине:', error);
                setCartError(true);
            }
        };



        fetchCartData();
    }, [login]);

    if (cartError) {
        return (
            <div className={styles.container}>
                <h1>Ваша корзина</h1>
                <p className={styles.error}>Корзина пустая</p>
                <button className={styles.navigateBTN} onClick={OpenCatalog}>К покупкам</button>
            </div>
        );
    }

    if (!cartData) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <h1>Корзина пользователя {login}</h1>
            <ul className={styles.cartList}>
                {cartData.cart.map((item) => (
                    <li key={item.productId} className={styles.cartItem}>
                        <span>{item.productName}</span>
                        <span>{item.quantity} шт.</span>
                        <span>{item.price} руб</span>
                        <hr/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;
