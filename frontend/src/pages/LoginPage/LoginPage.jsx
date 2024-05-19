import { useState } from 'react';
import axios from 'axios';
import style from './login.module.css';
import { useNavigate, Link } from 'react-router-dom';
import InputRgb from '../../modules/inputRGB/inputRGB';


function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = async () => {
    if (!login || !password) {
      alert('Логин и пароль должны быть заполнены');
      console.error('Логин и пароль должны быть заполнены');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/login', {
        login: login,
        password: password,
      });
      console.log(response.data);

      if (response.status === 200) {
        console.log('Успешная авторизация');

        navigate('/main');
      } else {
        alert('Неверный логин или пароль');
      }
    } catch (error) {
      console.error('Ошибка при отправке данных на сервер:', error);
      alert('Неверный логин или пароль');
    }
  };

  return (
    <div className={style.flex}>
      <div className={style.registerContainer}>
        <div className={style.inputContainer}>
          <InputRgb
            type="text"
            placeholder="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <InputRgb
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={style.buttonContainer}>
          <button className={style.button} onClick={handleLogin}>Авторизация</button>
          <Link to="/register">
            <button className={style.button}>Регистрация</button>
          </Link>
          

        </div>
      </div>
    </div>
  );
}

export default LoginPage;
