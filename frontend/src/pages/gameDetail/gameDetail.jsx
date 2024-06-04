import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './GameDetail.module.css';

function GameDetail() {
    const { id } = useParams();
    const [game, setGame] = useState(null);

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

    if (!game) {
        return <div>Загрузка...</div>;
    }

    return (
        <div className={style.gameDetail}>
            <ToastContainer autoClose={2000} />
            <img src={game.ImageLink} alt={game.Name} className={style.image} />
            <h1>{game.Name}</h1>
            <h2>{game.Title}</h2>
            <p>Цена: {game.Price} руб.</p>
            <div className={style.tags}>
                {Array.isArray(game.Tags) && game.Tags.map((tag, index) => (
                    <span key={index} className={style.tag}>#{tag}</span>
                ))}
            </div>
        </div>
    );
}

export default GameDetail;
