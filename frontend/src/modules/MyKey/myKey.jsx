import style from './MyKey.module.css';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';

function MyKey() {
    const login = useSelector((state) => state.login.login);
    const [keys, setKeys] = useState([]);

    const fetchKeys = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/user-keys?login=${login}`);
            if (response.status === 200) {
                setKeys(response.data.keys);
            }
        } catch (error) {
            console.error('Ошибка при получении ключей пользователя:', error);
        }
    };

    useEffect(() => {
        fetchKeys();
    }, [login]);

    return (
        <div className={style.Container}>
            <h1>Ваши ключи</h1>
            <ul>
                {keys.map((key, index) => (
                    <li key={index}>
                        <span>{key.Game}: {key.Name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyKey;
