import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Cart() {
    const login = useSelector((state) => state.login.login);
    const [cartData, setCartData] = useState(null);
    const [cartError, setCartError] = useState(false);

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/cart?login=${login}`);
                if (response.status === 200) { // Check if the response is successful
                    if (response.data.error && response.data.error === 'Корзина не найдена') {
                        setCartError(true); // Set cart error flag if cart not found
                    } else {
                        setCartData(response.data);
                    }
                }
            } catch (error) {
                console.error('Ошибка при получении данных о корзине:', error);
                setCartError(true); // Set cart error flag in case of any other error
            }
        };

        fetchCartData();
    }, [login]);

    if (cartError) {
        return (
            <div>
                <h1>Корзина пользователя {login}</h1>
                <p>Корзина пустая</p>
            </div>
        );
    }

    if (!cartData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <h1>Корзина пользователя {login}</h1>
            <ul>
                {cartData.cart.map((item) => (
                    <li key={item.productId}>
                        {item.productName} - {item.quantity} шт. - {item.price} руб.
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Cart;
