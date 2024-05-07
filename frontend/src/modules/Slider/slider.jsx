import { useState, useEffect, useCallback } from 'react';
import style from './slider.module.css';
import SliderImage from './SliderImage/SliderImage';
import SliderButton from './SliderImage/SliderButton/sliderButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Slider() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [title, setTitle] = useState('Default Title');
    const [price, setPrice] = useState('Default Price');

    const images = [
        'src\\modules\\Slider\\SlideImages\\image1.jpg',
        'src\\modules\\Slider\\SlideImages\\image2.jpg',
        'src\\modules\\Slider\\SlideImages\\image3.jpg'
    ];

    const handlePreviousImage = useCallback(() => {
        const newIndex = (currentImageIndex - 1 + images.length) % images.length;
        setCurrentImageIndex(newIndex);
    }, [currentImageIndex, images.length]);

    const handleNextImage = useCallback(() => {
        const newIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(newIndex);
    }, [currentImageIndex, images.length]);

    useEffect(() => {
        const titles = ['"Battlefield 2042" - современный шутер от первого лица ', 
        'STALKER 2: выживание в зоне отчуждения.', 
        'HELLDIVERS: кооперативный шутер с научной фантастикой.']; 
        const prices = ['$69.99', '$49.99', '$50.50']; 
        setTitle(titles[currentImageIndex]);
        setPrice(prices[currentImageIndex]);
    }, [currentImageIndex]);

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
            <SliderImage
                imageUrl={images[currentImageIndex]}
                title={title}
                price={price}
            />
            <SliderButton onClick={handleNextImage}>
                <FontAwesomeIcon icon={faChevronRight}  size="2xl" className={style.bigFont} />
            </SliderButton>
        </div>
    );
}

export default Slider;
