import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './slick.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import PrevArrow from './LeftArrow';
import NextArrow from './RightArrow';

const SlickButton = ({ path, content }) => (
  <a href={path} className={styles.slideButton}>
    {content}
  </a>
);

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FaChevronLeft
      className={`${className} ${styles.slickArrow} ${styles.slickPrev}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FaChevronRight
      className={`${className} ${styles.slickArrow} ${styles.slickNext}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

function Slick() {
  const slides = [
    { img: 'https://source.unsplash.com/random/1800x700?sig=1', text: 'Slide 1 Description', price: '$49.99' },
    { img: 'https://source.unsplash.com/random/1800x700?sig=2', text: 'Slide 2 Description', price: '$49.99' },
    { img: 'https://source.unsplash.com/random/1800x700?sig=3', text: 'Slide 3 Description', price: '$59.99' },
    { img: 'https://source.unsplash.com/random/1800x700?sig=4', text: 'Slide 4 Description', price: '$79.99' },
    { img: 'https://source.unsplash.com/random/1800x700?sig=5', text: 'Slide 5 Description', price: '$89.99' },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className={styles.slide}>
                <SlickButton path="" content={<img src={slide.img} alt={`Slide ${index + 1}`} />} />
                <div className={styles.infoBox}>
                  <span className={styles.text}>{slide.text}</span>
                  <span className={styles.price}>{slide.price}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <PrevArrow className={styles.slickPrev} />
      <NextArrow className={styles.slickNext} />
    </div>
  );
}

export default Slick;
    