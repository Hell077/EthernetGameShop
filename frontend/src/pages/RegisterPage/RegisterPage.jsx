import { useState } from 'react';
import axios from 'axios';
import InputRgb from "../../modules/inputRGB/inputRGB";
import style from './RegisterPage.module.css'
import { useNavigate, Link } from 'react-router-dom';

function RegPage() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const navigate = useNavigate(); // Инициализация useNavigate

    const handleRegister = async () => {
        if (!login || !password || !repeatPassword) {
            alert('Все поля должны быть заполнены');
            console.error('Все поля должны быть заполнены');
            return;
        }

        if (password !== repeatPassword) {
            alert('Пароли не совпадают');
            console.error('Пароли не совпадают');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/register', {
                login: login,
                password: password,
            });
            console.log(response.data);

            if (response.status === 201) {
                console.log('Успешная регистрация');
                navigate('/');
            } else {
                alert('Ошибка при регистрации');
            }
        } catch (error) {
            console.error('Ошибка при отправке данных на сервер:', error);
            alert('Ошибка при регистрации');
        }
    };

    return (
        <div className={style.flex}>
            <div className={style.registerContainer}>
                <div className={style.inputContainer}>
                    <InputRgb
                        type="text"
                        placeholder="Login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <InputRgb
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRgb
                        type="password"
                        placeholder="Repeat password"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                </div>
                <div className={style.buttonContainer}>
                    <button className={style.button} onClick={handleRegister}>Регистрация</button>
                </div>
                <Link to="/">
                    <button className={style.button}>К авторизации</button>
                </Link>
            </div>
        </div>
    );
}

export default RegPage;
