import styles from './aside.module.css';
import { useState } from 'react';


function Aside() {
    const [transform, setTransform] = useState("translateX(-80%)");

    function newTransform() {
        setTransform(prevTransform =>
            prevTransform === "translateX(-80%)" ? "translateX(0%)" : "translateX(-80%)"
        );
    }

    return (
        <>
            <aside style={{ transform }}>
                <button className={styles.show} onClick={newTransform}></button>
            </aside>
        </>
    );
}

export default Aside;
