import ListElement from './listElement/listElement';
import styles from '../topGamesList.module.css'


const newsData = {
    'Новинки': [
        <div className={styles.massiveImage} key='1'>
            <img src="" alt="none" className={styles.image} />
            <div className={styles.flexInMassive}>
                <h1>Название игры</h1>
                <p>Описание игры</p>
            </div>
        </div>,
        <div className={styles.massiveImage} key='2'>
            <img src="" alt="none" className={styles.image} />
            <div className={styles.flexInMassive}>
                <h1>Название игры</h1>
                <p>Описание игры</p>
            </div>
        </div>,
        <div className={styles.massiveImage} key='3'>
            <img src="" alt="none" className={styles.image} />
            <div className={styles.flexInMassive}>
                <h1>Название игры</h1>
                <p>Описание игры</p>
            </div>
        </div>,
        <div className={styles.massiveImage} key='4'>
            <img src="" alt="none" className={styles.image} />
            <div className={styles.flexInMassive}>
                <h1>Название игры</h1>
                <p>Описание игры</p>
            </div>
        </div>,
        <div className={styles.massiveImage} key='5'>
            <img src="" alt="none" className={styles.image} />
            <div className={styles.flexInMassive}>
                <h1>Название игры</h1>
                <p>Описание игры</p>
            </div>
        </div>

    ],
    'Лидеры продаж': [
        <div className={styles.massiveImage} key='1'>
            <img src="" alt="none" className={styles.image} />
            <div className={styles.flexInMassive}>
                <h1>Топ игры</h1>
                <p>Описание игры</p>
            </div>
        </div>,
        <div className={styles.massiveImage} key='2'>
            <img src="" alt="none" className={styles.image} />
            <div className={styles.flexInMassive}>
                <h1>Топ игры</h1>
                <p>Описание игры</p>
            </div>
        </div>,
        <div className={styles.massiveImage} key='3'>
            <img src="" alt="none" className={styles.image} />
            <div className={styles.flexInMassive}>
                <h1>Топ игры</h1>
                <p>Описание игры</p>
            </div>
        </div>,
        <div className={styles.massiveImage} key='4'>
            <img src="" alt="none" className={styles.image} />
            <div className={styles.flexInMassive}>
                <h1>Топ игры</h1>
                <p>Описание игры</p>
            </div>
        </div>,
        <div className={styles.massiveImage} key='5'>
            <img src="" alt="none" className={styles.image} />
            <div className={styles.flexInMassive}>
                <h1>Топ игры</h1>
                <p>Описание игры</p>
            </div>
        </div>
    ],
};

function List({ selectedNewsType }) {
    const newsList = newsData[selectedNewsType];

    return (
        <div className={styles.newsContainer}>
            {newsList.map((item, index) => (
                <div key={index} className={styles.newsItem}>
                    <ListElement title={item} />
                </div>
            ))}
        </div>
    );
}

export default List;
