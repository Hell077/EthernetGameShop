import style from './slider.module.css'
import SliderImage from './SliderImage/SliderImage';
import SliderButton from './SliderImage/SliderButton/sliderButton';

function Slider() {
    return (<>
        <div className={style.Slider}>
            <SliderButton />
            <SliderImage />
            <SliderButton />
        </div>
    </>);
}

export default Slider;