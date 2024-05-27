import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faMagnifyingGlass, faXmark, faHouse, faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

function Header() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const openProfile = () =>{
        navigate('/profile');
    }
    const openCart = () =>{
        navigate('/cart');
    }
    const openCatalog = () =>{
        navigate('/catalog');
    }
    const OpenMain = () =>{
        navigate('/main')
    }
    const Leave = () =>{
        navigate('/')
    }



    function togglePopUp() {
        setOpen(!open);
    }
    return (
        <>
            <div className={`${styles.PopUpWindow} ${open ? styles.open : ''}`}>
                <div className={styles.popUpBlock}>

                    <div className={styles.element} onClick={togglePopUp}>
                        <FontAwesomeIcon icon={faXmark} onClick={togglePopUp} className={styles.icon}/>
                    </div>
                    <div className={styles.element} onClick={OpenMain}>
                        <FontAwesomeIcon icon={faHouse} style={{fontSize: '2rem'}}/>
                        <p>Главная</p>
                    </div>
                    <div className={styles.element} onClick={openProfile}>
                        <FontAwesomeIcon icon={faUser} style={{fontSize: '2rem'}}/>
                        <p>Профиль</p>
                    </div>
                    <div className={styles.element} onClick={openCart}>
                        <FontAwesomeIcon icon={faCartShopping} style={{fontSize: '2rem'}}/>
                        <p>Корзина</p>
                    </div>
                    <div className={styles.element} onClick={openCatalog}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize: '2rem'}}/>
                        <p>Поиск</p>
                    </div>
                    <div className={styles.element} onClick={Leave}>
                        <FontAwesomeIcon icon={faArrowRightToBracket} flip="both" size="2xl" />
                        <p>Выйти</p>
                    </div>
                </div>

            </div>
            <header className={styles.header}>
                <div className={styles.HeaderElements}>
                    <div onClick={togglePopUp}>
                        <FontAwesomeIcon icon={faBars} style={{ fontSize: '2rem' }} />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
