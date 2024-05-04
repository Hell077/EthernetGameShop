import PropTypes from 'prop-types';
import style from './sliderbutton.module.css';

function SliderButton(props) {
    return (
        <button className={style.button} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

SliderButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default SliderButton;
