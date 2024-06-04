import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Keys.module.css';

function Keys() {
    const [keys, setKeys] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/userKeys');
                setKeys(response.data);
            } catch (error) {
                console.error('Ошибка получения данных:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={style.container}>
            <h2>Ключи пользователей</h2>
            <table className={style.table}>
                <thead>
                <tr>
                    <th>ID ключа</th>
                    <th>Логин пользователя</th>
                    <th>Название ключа</th>
                    <th>Игра</th>
                </tr>
                </thead>
                <tbody>
                {keys.map((key) => (
                    <tr key={key._id}>
                        <td>{key._id}</td>
                        <td>{key.Login}</td>
                        <td>{key.Keys[0].Name}</td>
                        <td>{key.Keys[0].Game}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Keys;
