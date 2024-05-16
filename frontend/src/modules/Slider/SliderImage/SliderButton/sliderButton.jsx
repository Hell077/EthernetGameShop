import style from './sliderbutton.module.css';

function SliderButton(props) {
    return (
        <button className={style.button} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default SliderButton;
