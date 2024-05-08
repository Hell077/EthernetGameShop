import style from './buttons.module.css'


function FooterBtns(props) {
    return ( <>
    <button className={style.Button}>
        {props.title}
    </button>
    
    </> );
}

export default FooterBtns;