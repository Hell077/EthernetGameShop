import style from './payImage.module.css'

function PayImage(props) {
    return ( 
        <img src={props.Image} alt="" className={style.Image}/>
     );
}

export default PayImage;