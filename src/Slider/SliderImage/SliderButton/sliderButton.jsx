import style from './sliderbutton.module.css'






function SliderButton(section) {
    return (
        <>
            <button className ={style.button} onClick={section}></button>
        </>
    );
}

export default SliderButton;