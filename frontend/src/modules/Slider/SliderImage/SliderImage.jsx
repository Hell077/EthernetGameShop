import style from './SliderImage.module.css';

function SliderImage(props) {
    return (
        <button className={`${style.SliderImage} ${props.isActive && style.active}`}>
            <div className={style.container}>
                <p className={style.title}>{props.title}</p>
                <p className={style.price}>{props.price}</p>
            </div>
            <img src={props.imageUrl} alt="Slider" />
        </button>
    );
}



export default SliderImage;
