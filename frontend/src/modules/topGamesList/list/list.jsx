import ListElement from './listElement/listElement';
import styles from '../topGamesList.module.css'


const newsData = {
    'Новинки': [
        <div className={styles.massiveImage} key='1'>
            <img src="src\\modules\\topGamesList\\listImages\\manorlords.jpg" alt="none" className={styles.image} />
            <div className={styles.flexInMassive}>
                <h1>Manor Lords</h1>
                <p>Manor Lords - это стратегическая игра в реальном времени с элементами градостроительства и политики в средневековой атмосфере. Игроки управляют поместьем, развивая экономику, формируя армию и вступая в политические интриги. Игра предлагает тактические бои, реалистичную графику и стремится к аутентичности средневековой эпохи.</p>
            </div>
        </div>,
        <div className={styles.massiveImage} key='2'>
            <img src="" alt="none" className={styles.image} />
            <div className={styles.flexInMassive}>
                <h1>Dota 2</h1>
                <p>Dota 2 - это многопользовательская онлайн-игра в жанре MOBA (многопользовательская онлайн-арена боев) разработанная и выпущенная компанией Valve Corporation. В игре две команды, состоящие из пяти игроков, сражаются за контроль над картой, уничтожая противника и защищая свою базу. Каждый игрок выбирает героя с уникальными способностями и стратегиями, которые позволяют адаптироваться к различным ситуациям в игре. Dota 2 популярна в мире киберспорта и ежегодно проводятся крупные турниры с миллионными призовыми фондами.</p>
            </div>
        </div>,
        <div className={styles.massiveImage} key='3'>
            <img src="" alt="none" className={styles.image} />
            <div className={styles.flexInMassive}>
                <h1>HELLDIVERS 2</h1>
                <p>HELLDIVERS 2 - это кооперативный шутер с видом сверху, разработанный и изданный Arrowhead Game Studios. В игре игроки в роли воинов из будущего сражаются против врагов во вселенной, чтобы защитить свою родную планету. Игроки могут выбирать из различных классов персонажей и снаряжения, а также использовать тактические навыки и координированные атаки, чтобы одолеть врагов. HELLDIVERS 2 предлагает динамичный геймплей, множество оружия и возможность кооперативной игры с друзьями.</p>
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
