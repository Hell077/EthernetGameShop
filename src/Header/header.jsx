import { useState } from 'react';
import style from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCubes, faHandshakeAngle, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [active, setActive] = useState('');

    


    return (<>
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.logo}></div>
                <div className={style.Catalog}>
                    <FontAwesomeIcon className={style.bigSize} icon={faCubes} size="2xl" style={{ color: "#fff", }} />
                    <p className={style.pHover}>Каталог продукции</p>
                </div>
                <div className={style.Help}>
                    <FontAwesomeIcon className={style.bigSize} icon={faHandshakeAngle} size="2xl" style={{ color: "#fff", }} />
                    <p className={style.pHover}>Поддержка</p>
                </div>
                <div className={style.Card}>
                    <FontAwesomeIcon className={style.bigSize} icon={faCartShopping} size="2xl" style={{ color: "#fff", }} />
                    <p className={style.pHover}>Мои покупки</p>
                </div>
                <div className={style.Find}>
                    <FontAwesomeIcon className={style.mediumSize} icon={faMagnifyingGlass} size="2xl" style={{ color: "#fff", }} />
                    <p className={style.pHover}>Поиск игр</p>
                </div>
                <div className={style.bars}>
                    <button className={style.barsButton} onClick={setActive}>
                        <FontAwesomeIcon className={style.bigSize} icon={faBars} size="2xl" style={{ color: "#fff", }} />
                    </button>
                </div>
            </div>

        </div>
    </>);
}

export default Header;

