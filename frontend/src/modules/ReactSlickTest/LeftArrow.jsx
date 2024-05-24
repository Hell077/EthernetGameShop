import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <FaChevronLeft
            className={className}
            style={{ ...style, display: "block", position: "absolute", top: "50%", left: "-50px", transform: "translateY(-50%)", zIndex: 2, backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '10px', borderRadius: '50%', cursor: 'pointer', transition: 'background-color 0.3s ease', fontSize: '24px', userSelect: 'none', opacity: 0.7 }}
            onClick={onClick}
        />
    );
};

export default PrevArrow

