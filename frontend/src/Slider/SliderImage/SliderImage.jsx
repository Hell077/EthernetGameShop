import PropTypes from 'prop-types';
import style from './SliderImage.module.css';

function SliderImage(props) {
    return (
        <div className={`${style.SliderImage} ${props.isActive && style.active}`}>
            <img src={props.imageUrl} alt="Slider" />
        </div>
    );
}

SliderImage.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    isActive: PropTypes.string
};

export default SliderImage;
