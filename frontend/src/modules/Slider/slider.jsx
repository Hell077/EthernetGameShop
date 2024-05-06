import  { useState, useEffect, useCallback } from 'react';
import style from './slider.module.css';
import SliderImage from './SliderImage/SliderImage';
import SliderButton from './SliderImage/SliderButton/sliderButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';



function Slider() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        //Путь до картинок
        'src\\modules\\Slider\\SlideImages\\image1.jpg',
        'src\\modules\\Slider\\SlideImages\\загружено.jpg',
        'src\\modules\\Slider\\SlideImages\\OIG3.jpg'
    ];

    const handlePreviousImage = useCallback(() => {
        const newIndex = (currentImageIndex - 1 + images.length) % images.length;
        setCurrentImageIndex(newIndex);
    }, [currentImageIndex, images.length]);

    const handleNextImage = useCallback(() => {
        const newIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(newIndex);
    }, [currentImageIndex, images.length]);


    //Интервал переключения картинок
    useEffect(() => {
        const interval = setInterval(() => {
            handleNextImage();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentImageIndex, handleNextImage]);

    return (
        <div className={style.Slider}>
            <SliderButton onClick={handlePreviousImage}>
                <FontAwesomeIcon icon={faChevronRight} rotation={180} size="2xl" className={style.bigFont}/>
            </SliderButton>
            <SliderImage imageUrl={images[currentImageIndex]} />
            <SliderButton onClick={handleNextImage}>
                <FontAwesomeIcon icon={faChevronRight}  size="2xl" className={style.bigFont} />
            </SliderButton>
        </div>
    );
}

export default Slider;
