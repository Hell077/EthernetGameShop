import React from 'react';
import styles from './FilterCheckBox.module.css';

const FilterCheckBox = ({ text, onChange }) => {
    return (
        <label className={styles.checkboxContainer}>
            <input type="checkbox" onChange={onChange} />
            <span className={styles.checkmark}></span>
            {text}
        </label>
    );
};

export default FilterCheckBox;
