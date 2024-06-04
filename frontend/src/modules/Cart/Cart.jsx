import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Cart.module.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
    const login = useSelector((state) => state.login.login);
    const [cartData, setCartData] = useState(null);
    const [cartError, setCartError] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    const navigate = useNavigate();

    const OpenCatalog = () => {
        navigate('/catalog');
    }

    const fetchCartData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/cart?login=${login}`);
            if (response.status === 200) {
                if (response.data.error && response.data.error === 'Корзина не найдена') {
                    setCartError(true);
                } else {
                    setCartData(response.data);
                    const totalPrice = response.data.cart.reduce((acc, item) => {
                        return acc + (item.price * item.quantity);
                    }, 0);
                    setTotalPrice(totalPrice);
                }
            }
        } catch (error) {
            setCartError(true);
        }
    };

    const removeItemFromCart = async (productId) => {
        try {
            await axios.post('http://localhost:3000/cart/remove', { login, productId });
            toast.success("Успешно удалено")
            setTimeout(() => fetchCartData(), 1000);

        } catch (error) {
            console.error('Ошибка при удалении товара из корзины:', error);
            setCartError(true);
        }
    };

    const handlePayment = async () => {
        try {
            const response = await axios.post('http://localhost:3000/generate-keys', { login });
            if (response.data.success) {
                toast.success("Успешная оплата, перейдите в раздел *Мои Ключи*")
                setTimeout(() => {
                    fetchCartData();
                }, 5000);
            } else {
                toast.error("Ошибка при оплате")
            }
        } catch (error) {
            toast.error("Ошибка при оплате")
        }
    };

    useEffect(() => {
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
        <>
            <ToastContainer/>
            <div className={styles.container}>
                <div className={styles.headContainer}>
                    <p className={styles.totalPrice}>Общая сумма: {totalPrice} руб</p>
                    <button className={styles.buyBtn} onClick={handlePayment}>Оплатить</button>
                </div>

                <ul className={styles.cartList}>
                    {cartData.cart.map((item) => (
                        <li key={item.productId} className={styles.cartItem}>
                            <span className={styles.productName}>{item.productName}</span>
                            <span className={styles.productQuantity}>{item.quantity} шт.</span>
                            <span className={styles.productPrice}>{item.price} руб</span>
                            <button
                                className={styles.removeButton}
                                onClick={() => removeItemFromCart(item.productId)}
                            >
                                Удалить
                            </button>
                        </li>
                    ))}
                </ul>

            </div>
        </>

    );
}

export default Cart;
