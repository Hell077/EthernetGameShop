import styles from './aside.module.css';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

function Aside() {
    const [transform, setTransform] = useState("translateX(0%)");
    const login = useSelector((state) => state.login.login);
    const navigate = useNavigate();

    function newTransform() {
        setTransform(prevTransform =>
            prevTransform === "translateX(-80%)" ? "translateX(0)" : "translateX(-80%)"
        );
    }

    const handleRegisterRedirect = () => {
        navigate('/');
    };

    return (
        <>
            <aside style={{ transform }}>
                {login != ''}{
                <div className={styles.login}>
                    <span>Имя пользователя</span>
                    <h1>{login}</h1>
                </div>
                }
                {login === '' && (
                    <>
                        <div className={styles.loginRedirect}>
                        <h3>Вы не авторизованы</h3>
                            <button onClick={handleRegisterRedirect}>Авторизация</button>
                        </div>
                    </>
                )}
                <button className={styles.show} onClick={newTransform}></button>
            </aside>
        </>
    );
}

export default Aside;
