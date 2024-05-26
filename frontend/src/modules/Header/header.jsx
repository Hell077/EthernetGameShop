import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useState } from "react";

function Header() {
    const [open, setOpen] = useState(false);

    function togglePopUp() {
        setOpen(!open);
    }
    return (
        <>
            <div className={`${styles.PopUpWindow} ${open ? styles.open : ''}`}>
                <FontAwesomeIcon icon={faXmark} onClick={togglePopUp} className={styles.icon}/>
            </div>
            <header className={styles.header}>
                <div className={styles.HeaderElements}>
                    <div className={styles.element} onClick={togglePopUp}>
                        <FontAwesomeIcon icon={faBars} style={{ fontSize: '2rem' }} />
                    </div>
                    <div className={styles.element}>
                        <FontAwesomeIcon icon={faUser} style={{ fontSize: '2rem' }} />
                    </div>
                    <div className={styles.element}>
                        <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: '2rem' }} />
                    </div>
                    <div className={styles.element}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: '2rem' }} />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
