// Импортируем стили
import style from './inputRGB.module.css';


function InputRgb({ type, placeholder, value, onChange }) {
    return (
        <div className={style.inputContainer}>
            <input
                type={type}
                placeholder={placeholder}
                className={style.input}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default InputRgb;



