import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './slick.module.css';
import PrevArrow from './LeftArrow';
import NextArrow from './RightArrow';

const SlickButton = ({ path, content }) => (
    <a href={path} className={styles.slideButton}>
      {content}
    </a>
);

function Slick() {
  const slides = [
    { img: 'https://www.amd.com/content/dam/amd/en/images/games/red-dead-redemption-2/348038-red-dead-redemption-keyart.jpg', text: 'Red Dead Redemption 2', price: '3999руб.', path: 'http://localhost:5173/catalog/665cce475b7d584f9a5ad445' },
    { img: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/11/forza-horizon-5-sand-dunes-logo.jpg', text: 'Forza Horizon 5', price: '3999руб.', path: 'http://localhost:5173/catalog/665cd4435b7d584f9a5ad44c' },
    { img: 'https://rushbe.ru/_next/image?url=https%3A%2F%2Frushbe.ru%2Fmedia%2Fhor.jfif_1666962018343.webp&w=1920&q=75', text: 'Europa Universalis IV', price: '2399руб.', path: 'http://localhost:5173/catalog/665cd72f5b7d584f9a5ad456' },
    { img: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/ArmA_3_Logo_%28Black%29.png', text: 'Arma3', price: '2199руб.', path: 'http://localhost:5173/catalog/665cdb695b7d584f9a5ad458' },
    { img: 'https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2018/12/Anno-1800.jpg', text: 'Anno 1800', price: '2899руб.', path: 'http://localhost:5173/catalog/665cdb6f5b7d584f9a5ad45a' },
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
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
      <div className={styles.sliderWrapper}>
        <div className={styles.sliderContainer}>
          <div className={styles.slider}>
            <Slider {...settings}>
              {slides.map((slide, index) => (
                  <div key={index} className={styles.slide}>
                    <SlickButton path={slide.path} content={<img src={slide.img} alt={`Slide ${index + 1}`} />} />
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
