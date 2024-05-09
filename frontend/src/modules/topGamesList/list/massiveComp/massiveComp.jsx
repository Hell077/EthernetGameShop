import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function MassiveComp({ tagH, tagP, image, path}) {
    return (
        <Link to={path}>
            <button className={styles.massive}>
                <img src={image} alt="none" className={styles.image} />
                <div className={styles.flexInMassive}>
                    <h1 className={styles.tagH}>{tagH}</h1>
                    <p className={styles.tagP}>{tagP}</p>
                </div>
            </button>
        </Link>
    );
}

export default MassiveComp;
