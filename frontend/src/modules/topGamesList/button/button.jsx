import style from '../topGamesList.module.css';

function Button({ onClick, title }) {
    return ( 
        <button
            onClick={onClick}
            className={style.button}
        >
            {title}
        </button>
     );
}

export default Button;
