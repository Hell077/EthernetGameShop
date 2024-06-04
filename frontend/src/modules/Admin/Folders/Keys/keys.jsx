import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Keys.module.css';

function Keys() {
    const [keys, setKeys] = useState([]);
    const [expandedUsers, setExpandedUsers] = useState({});

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

    const toggleExpand = (userId) => {
        setExpandedUsers((prev) => ({
            ...prev,
            [userId]: !prev[userId],
        }));
    };

    return (
        <div className={style.container}>
            <h2>Ключи пользователей</h2>
            <table className={style.table}>
                <thead>
                <tr>
                    <th>ID пользователя</th>
                    <th>Логин пользователя</th>
                    <th>Действие</th>
                </tr>
                </thead>
                <tbody>
                {keys.map((user) => (
                    <React.Fragment key={user._id}>
                        <tr>
                            <td>{user._id}</td>
                            <td>{user.Login}</td>
                            <td>
                                <button onClick={() => toggleExpand(user._id)}>
                                    {expandedUsers[user._id] ? 'Свернуть' : 'Развернуть'}
                                </button>
                            </td>
                        </tr>
                        {expandedUsers[user._id] && (
                            <tr>
                                <td colSpan="3">
                                    <table className={style.innerTable}>
                                        <thead>
                                        <tr>
                                            <th>Название ключа</th>
                                            <th>Игра</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {user.Keys.map((key, index) => (
                                            <tr key={`${user._id}-${index}`}>
                                                <td>{key.Name}</td>
                                                <td>{key.Game}</td>
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

export default Keys;
