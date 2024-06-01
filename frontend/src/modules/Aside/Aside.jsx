import styles from './aside.module.css';
import { useState } from 'react';
import {useSelector} from "react-redux";


function Aside() {
    const [transform, setTransform] = useState("translateX(0%)");

    function newTransform() {
        setTransform(prevTransform =>
            prevTransform === "translateX(-80%)" ? "translateX(0)" : "translateX(-80%)"
        );
    }

    const login = useSelector((state) => state.login.login);

    return (
        <>
            <aside style={{ transform }}>
                <p>Текущий логин {login}</p>
                <button className={styles.show} onClick={newTransform}></button>
            </aside>
        </>
    );
}

export default Aside;
