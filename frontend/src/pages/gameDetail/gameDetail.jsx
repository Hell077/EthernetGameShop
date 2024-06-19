import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './GameDetail.module.css';
import Header from '../../modules/Header/header.jsx'

function GameDetail() {
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const login = useSelector((state) => state.login.login);

    useEffect(() => {
        fetchGameDetail();
    }, [id]);

    const fetchGameDetail = async () => {
        try {
            const response = await fetch(`http://localhost:3000/catalog/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setGame(data);
        } catch (error) {
            console.error('Ошибка при получении данных игры:', error);
            toast.error('Ошибка при получении данных игры');
        }
    };

    const handleAddToCart = async () => {
        try {
            const response = await fetch('http://localhost:3000/cart/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId: game._id,
                    productName: game.Name,
                    price: game.Price,
                    login: login,
                    quantity: 1,
                }),
            });

            const data = await response.json();
            if (response.ok && login) {
                toast.success('Товар успешно добавлен в корзину');
            } else {
                toast.error('Ошибка при добавлении товара в корзину');
            }
        } catch (error) {
            console.error('Ошибка при добавлении товара в корзину:', error);
        }
    };

    if (!game) {
        return <div className={style.loading}>Загрузка...</div>;
    }

    return (
        <>
            <Header/>
            <div className={style.gameDetailContainer}>
                <div className={style.gameDetail}>
                    <ToastContainer autoClose={2000}/>
                    <img src={game.ImageLink} alt={game.Name} className={style.image}/>
                    <div className={style.details}>
                        <h1>{game.Name}</h1>
                        <h2>{game.Title}</h2>
                        <p>Цена: {game.Price} руб.</p>
                        <div className={style.tags}>
                            {Array.isArray(game.Tags) && game.Tags.map((tag, index) => (
                                <span key={index} className={style.tag}>#{tag}</span>
                            ))}
                        </div>
                        <button onClick={handleAddToCart} className={style.addToCartBtn}>
                            Добавить в корзину
                        </button>
                    </div>
                </div>
            </div>

        </>

    );
}

export default GameDetail;

