import ListElement from './listElement/listElement';
import styles from '../topGamesList.module.css'



//image link \/
import manorlords from './listImages/manorlords.jpg'
import MassiveComp from './massiveComp/massiveComp';
import dota2 from './listImages/dota2.jpg'
import helldrivers from './listImages/helldivers.jpg'
import destiny2 from './listImages/destiny2.jpg'
import hexguardian from './listImages/hexguardian.jpg'
import gtfo from './listImages/gtfo.jpg'
import hellletloose from './listImages/hellletloose.jpg'
import horizonzero from './listImages/horizonzero.jpg'
import nomanssky from './listImages/nomanssky.jpg'
import metroexodus from './listImages/metroexodus.jpg'


const newsData = {
    'Новинки': [
        <MassiveComp path="http://localhost:5173/catalog/665ce1c65b7d584f9a5ad462" key={1} tagH={"Manor Lords"} tagP={'Manor Lords - это стратегическая игра о строительстве и управлении средневековым поселением.'} image={manorlords} />,
        <MassiveComp path="http://localhost:5173/catalog/665cd2915b7d584f9a5ad44a" key={2} tagH={"Dota2"} tagP={' Dota 2 - онлайн-игра с героями, цель которой - захватить базу противника.'} image={dota2} />,
        <MassiveComp path="http://localhost:5173/catalog/665ce1cb5b7d584f9a5ad463" key={3} tagH={"Helldivers 2"} tagP={'Helldivers 2 - это кооперативный шутер с видом сверху, где игроки сражаются против враждебных сил в космическом мире.'} image={helldrivers} />,
        <MassiveComp path="http://localhost:5173/catalog/665ce1cf5b7d584f9a5ad464" key={4} tagH={"Destiny 2 The Final Shape"} tagP={'Destiny 2: The Final Shape - это расширение для игры Destiny 2, которое предлагает новые миры и задания в борьбе за судьбу вселенной.'} image={destiny2} />,
        <MassiveComp path="http://localhost:5173/catalog/665ce1d45b7d584f9a5ad465" key={5} tagH={"Hexguardian"} tagP={'Hexguardian - это фэнтезийная игра с элементами стратегии, в которой игроки сражаются с монстрами и исследуют мир, используя магические способности.'} image={hexguardian} />,
    ],
    'Лидеры продаж': [
        <MassiveComp path="http://localhost:5173/catalog/665cdb795b7d584f9a5ad45c" key={6} tagH={"GTFO"} tagP={'GTFO - это кооперативный шутер с элементами выживания, где игроки исследуют подземелья, борясь с враждебными существами в атмосфере напряжения и ужаса.'} image={gtfo} />,
        <MassiveComp path="http://localhost:5173/catalog/665cdb7d5b7d584f9a5ad45d" key={7} tagH={"Hell Let Loose"} tagP={'Hell Let Loose - это многопользовательская военная игра, в которой игроки принимают участие в реалистичных сражениях времен Второй мировой войны.'} image={hellletloose} />,
        <MassiveComp path="http://localhost:5173/catalog/665cdb875b7d584f9a5ad45f" key={8} tagH={"Horizon Zero Dawn™ Complete Edition"} tagP={'Horizon Zero Dawn: Complete Edition - приключенческая игра в открытом мире с боевой системой против механизированных существ в постапокалиптическом мире.'} image={horizonzero} />,
        <MassiveComp path="http://localhost:5173/catalog/665cdb8e5b7d584f9a5ad460" key={9} tagH={"No Man's Sky"} tagP={'No Mans Sky - это открытая вселенная, где игроки исследуют бесконечные галактики, обнаруживают разнообразные планеты и существ, строят базы и путешествуют по космосу.'} image={nomanssky} />,
        <MassiveComp path="http://localhost:5173/catalog/665cdb9b5b7d584f9a5ad461" key={10} tagH={"Metro Exodus"} tagP={'"Метро: Исход" - шутер с открытым миром, где игроки путешествуют по постапокалиптической России.'} image={metroexodus} />,
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
