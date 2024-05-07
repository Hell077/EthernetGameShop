
import styles from './styles.module.css';

function MassiveComp({ tagH, tagP, image, key }) {
    return (
        <button className={styles.massive} key={key}>
            <img src={image} alt="none" className={styles.image} />
            <div className={styles.flexInMassive}>
                <h1 className={styles.tagH}>{tagH}</h1>
                <p className={styles.tagP}>{tagP}</p>
            </div>
        </button>
    );
}

export default MassiveComp;
