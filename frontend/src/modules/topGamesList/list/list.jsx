import ListElement from './listElement/listElement';
import styles from '../topGamesList.module.css'
import manorlords from './listImages/manorlords.jpg'


//image link \/
import MassiveComp from './massiveComp/massiveComp';
import dota2 from './listImages/dota2.jpg'
import helldrivers from './listImages/helldivers.jpg'


const newsData = {
    'Новинки': [
        <MassiveComp key='1' tagH={"Manor Lords"} tagP={'Описание Manor Lords'} image={manorlords} />,
        <MassiveComp key='2' tagH={"dota2"} tagP={'Описание dota2'} image={dota2} />,
        <MassiveComp key='3' tagH={"helldrivers "} tagP={'Описание helldrivers'} image={helldrivers} />,
        <MassiveComp key='4' tagH={"Название игры"} tagP={'Описание'} image={null} />,
        <MassiveComp key='5' tagH={"Название игры"} tagP={'Описание'} image={null} />,
    ],
    'Лидеры продаж': [
        <MassiveComp key='1' tagH={"Название игры"} tagP={'Описание'} image={null} />,
        <MassiveComp key='1' tagH={"Название игры"} tagP={'Описание'} image={null} />,
        <MassiveComp key='1' tagH={"Название игры"} tagP={'Описание'} image={null} />,
        <MassiveComp key='1' tagH={"Название игры"} tagP={'Описание'} image={null} />,
        <MassiveComp key='1' tagH={"Название игры"} tagP={'Описание'} image={null} />,
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
