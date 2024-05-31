import { useState } from 'react';
import axios from 'axios';
import style from './login.module.css';
import { useNavigate, Link } from 'react-router-dom';
import InputRgb from '../../modules/inputRGB/inputRGB';

function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!login || !password) {
      alert('Логин и пароль должны быть заполнены');
      console.error('Логин и пароль должны быть заполнены');
      return;
    }

    setDisabled(true);
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
    } finally {
      setDisabled(false);
      setLogin('');
      setPassword('');
    }
  };
  const RegisterRoute = () =>{
    navigate('/register');
  }

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
            <button className={style.loginBTN} onClick={handleLogin} disabled={disabled}>Авторизация</button>
              <button className={style.regBTN} onClick={RegisterRoute}>Регистрация</button>

          </div>
        </div>
      </div>
  );
}

export default LoginPage;
