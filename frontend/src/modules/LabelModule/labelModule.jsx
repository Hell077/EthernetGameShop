import style from './label.module.css'
import Footer from '../Footer/footer';

function LabelModule(props) {
    return ( 
        <>
            <div className={style.MainLabel}>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <p>{props.text2}</p>
                <p>{props.text3}</p>
                <p>{props.text4}</p>
            </div>
            <Footer/>
        </>
     );
}

export default LabelModule;