import style from './button.module.css';

function Button({ onClick, title }) {
    return (
        <button onClick={onClick} className={style.button}>
            {title}
        </button>
    );
}

export default Button;
