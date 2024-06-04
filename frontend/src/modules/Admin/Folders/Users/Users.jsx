import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Users.module.css';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Ошибка получения данных:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={style.container}>
            <h2>Пользователи</h2>
            <table className={style.table}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Логин</th>
                    <th>Пароль</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user._id}>
                        <td>{user._id}</td>
                        <td>{user.login}</td>
                        <td>{user.password}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Users;
