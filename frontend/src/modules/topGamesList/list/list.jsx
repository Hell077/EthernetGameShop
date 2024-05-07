import ListElement from './listElement/listElement';
import styles from '../topGamesList.module.css'
import manorlords from './listImages/manorlords.jpg'


const newsData = {
    'Новинки': [
        <div className={styles.massive} key='1'>
            <img src={manorlords} alt="none" className={styles.image} />
            <div className={styles.flexInMassive} >
                <h1 className={styles.tagH}>Manor Lords</h1>
                <p className={styles.tagP}>Manor Lords - это стратегическая игра в реальном времени с элементами градостроительства и политики в средневековой атмосфере. Игроки управляют поместьем, развивая экономику, формируя армию и вступая в политические интриги. Игра предлагает тактические бои, реалистичную графику и стремится к аутентичности средневековой эпохи.</p>
            </div>
        </div>,

        <div className={styles.massive} key='2'>
            <img src="" alt="none" className={styles.image} />
            <div className={styles.flexInMassive}>
                <h1 className={styles.tagH}>Dota 2</h1>
                <p className={styles.tagP}>Dota 2 - это многопользовательская онлайн-игра в жанре MOBA (многопользовательская онлайн-арена боев) разработанная и выпущенная компанией Valve Corporation. В игре две команды, состоящие из пяти игроков, сражаются за контроль над картой, уничтожая противника и защищая свою базу. Каждый игрок выбирает героя с уникальными способностями и стратегиями, которые позволяют адаптироваться к различным ситуациям в игре. Dota 2 популярна в мире киберспорта и ежегодно проводятся крупные турниры с миллионными призовыми фондами.</p>
            </div>
        </div>,
        <div className={styles.massive} key='3'>
            <img src="" alt="none" className={styles.image} />
            <div className={styles.flexInMassive}>
                <h1 className={styles.tagH}>HELLDIVERS 2</h1>
                <p className={styles.tagP}>HELLDIVERS 2 - это кооперативный шутер с видом сверху, разработанный и изданный Arrowhead Game Studios. В игре игроки в роли воинов из будущего сражаются против врагов во вселенной, чтобы защитить свою родную планету. Игроки могут выбирать из различных классов персонажей и снаряжения, а также использовать тактические навыки и координированные атаки, чтобы одолеть врагов. HELLDIVERS 2 предлагает динамичный геймплей, множество оружия и возможность кооперативной игры с друзьями.</p>
            </div>
        </div>,
        <div className={styles.massive} key='4'>
            <img src="" alt="none" className={styles.image} />
            <div className={styles.flexInMassive}>
                <h1 className={styles.tagH}>Название игры</h1>
                <p className={styles.tagP}>Описание игры</p>
            </div>
        </div>,
        <div className={styles.massive} key='5'>
            <img src="" alt="none" className={styles.image} />
            <div className={styles.flexInMassive}>
                <h1 className={styles.tagH}>Название игры</h1>
                <p className={styles.tagP}>Описание игры</p>
            </div>
        </div>

    ],
    'Лидеры продаж': [
        <div className={styles.massive} key='1'>
            <img src="" alt="none" className={styles.image} />
            <div className={styles.flexInMassive}>
                <h1 className={styles.tagH}>Топ игры</h1>
                <p className={styles.tagP}>Описание игры</p>
            </div>
        </div>,
        <div className={styles.massive} key='2'>
            <img src="" alt="none" className={styles.image} />
            <div className={styles.flexInMassive}>
                <h1 className={styles.tagH}>Топ игры</h1>
                <p className={styles.tagP}>Описание игры</p>
            </div>
        </div>,
        <div className={styles.massive} key='3'>
            <img src="" alt="none" className={styles.image} />
            <div className={styles.flexInMassive}>
                <h1 className={styles.tagH}>Топ игры</h1>
                <p className={styles.tagP}>Описание игры</p>
            </div>
        </div>,
        <div className={styles.massive} key='4'>
            <img src="" alt="none" className={styles.image} />
            <div className={styles.flexInMassive}>
                <h1 className={styles.tagH}>Топ игры</h1>
                <p className={styles.tagP}>Описание игры</p>
            </div>
        </div>,
        <div className={styles.massive} key='5'>
            <img src="" alt="none" className={styles.image} />
            <div className={styles.flexInMassive}>
                <h1 className={styles.tagH}>Топ игры</h1>
                <p className={styles.tagP}>Описание игры</p>
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
