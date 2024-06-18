import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faXmark, faHouse, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { clearLogin } from '../../Store/loginSlice'




    


        function Header() {
            const login = useSelector((state) => state.login.login);
            const [open, setOpen] = useState(false);
            const navigate = useNavigate();
            const dispatch = useDispatch(); 
        
            const openProfile = () => {
                navigate('/profile');
            };
        
            const openCatalog = () => {
                navigate('/catalog');
            };
        
            const openMain = () => {
                navigate('/main');
            };
        
            const leave = () => {
                dispatch(clearLogin()); 
            };
        
            function togglePopUp() {
                setOpen(!open);
            }
        
            return (
                login ? (
                    <>
                        <div className={`${styles.PopUpWindow} ${open ? styles.open : ''}`}>
                            <div className={styles.popUpBlock}>
                                <div className={styles.element} onClick={togglePopUp}>
                                    <p className={styles.icon}>Аккаунт : {login}</p>
                                    <FontAwesomeIcon icon={faXmark} onClick={togglePopUp} className={styles.icon2} />
                                </div>
                                <div className={styles.element} onClick={openMain}>
                                    <FontAwesomeIcon icon={faHouse} style={{ fontSize: '2rem' }} />
                                    <p>Главная</p>
                                </div>
                                <div className={styles.element} onClick={openProfile}>
                                    <FontAwesomeIcon icon={faUser} style={{ fontSize: '2rem' }} />
                                    <p>Профиль</p>
                                </div>
                                <div className={styles.element} onClick={openCatalog}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: '2rem' }} />
                                    <p>Поиск</p>
                                </div>
                                <div className={styles.element} onClick={leave}>
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
                ) : (
                    <>
                        <div className={`${styles.PopUpWindow} ${open ? styles.open : ''}`}>
                            <div className={styles.popUpBlock}>
                                <div className={styles.element} onClick={togglePopUp}>
                                    <p className={styles.icon}>Вы не авторизованы</p>
                                    <FontAwesomeIcon icon={faXmark} onClick={togglePopUp} className={styles.icon2} />
                                </div>
                                <div className={styles.element} onClick={openMain}>
                                    <FontAwesomeIcon icon={faHouse} style={{ fontSize: '2rem' }} />
                                    <p>Главная</p>
                                </div>
                                <div className={styles.element} onClick={openProfile}>
                                    <FontAwesomeIcon icon={faUser} style={{ fontSize: '2rem' }} />
                                    <p>Регистрация</p>
                                </div>
                                <div className={styles.element} onClick={openCatalog}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: '2rem' }} />
                                    <p>Поиск</p>
                                </div>
                                {/* <div className={styles.element} onClick={leave}>
                                    <FontAwesomeIcon icon={faArrowRightToBracket} flip="both" size="2xl" />
                                    <p>Выйти</p>
                                </div> */}
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
                )
            );
        }
        
        export default Header;
        
