import style from './buttons.module.css'
import { Link } from 'react-router-dom';

function FooterBtns(props) {
    return (<>
        <Link to={props.path}>
            <button className={style.Button}>
                {props.title}
            </button>
        </Link>


    </>);
}

export default FooterBtns;