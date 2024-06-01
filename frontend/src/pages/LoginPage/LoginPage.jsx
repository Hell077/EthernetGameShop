// src/pages/LoginPage/LoginPage.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import style from './login.module.css';
import { useNavigate } from 'react-router-dom';
import InputRgb from '../../modules/inputRGB/inputRGB';
import { setLogin } from '../../Store/loginSlice.js';

function LoginPage() {
  const [loginInput, setLoginInput] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (!loginInput || !password) {
      alert('Логин и пароль должны быть заполнены');
      console.error('Логин и пароль должны быть заполнены');
      return;
    }

    setDisabled(true);
    try {
      const response = await axios.post('http://localhost:3000/login', {
        login: loginInput,
        password: password,
      });

      console.log(response.data);
      if (response.status === 200) {
        console.log('Успешная авторизация');
        dispatch(setLogin(loginInput));  // Сохраняем логин в Redux
        navigate('/main');
      } else {
        alert('Неверный логин или пароль');
      }
    } catch (error) {
      console.error('Ошибка при отправке данных на сервер:', error);
      alert('Неверный логин или пароль');
    } finally {
      setDisabled(false);
      setLoginInput('');
      setPassword('');
    }
  };

  const RegisterRoute = () => {
    navigate('/register');
  }

  return (
      <div className={style.flex}>
        <div className={style.registerContainer}>
          <div className={style.inputContainer}>
            <InputRgb
                type="text"
                placeholder="login"
                value={loginInput}
                onChange={(e) => setLoginInput(e.target.value)}
            />
            <InputRgb
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={style.buttonContainer}>
            <button className={style.loginBTN} onClick={handleLogin} disabled={disabled}>Авторизация</button>
            <button className={style.regBTN} onClick={RegisterRoute}>Регистрация</button>
          </div>
        </div>
      </div>
  );
}

export default LoginPage;
