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
                <p>{props.text5}</p>
                <p>{props.text6}</p>
                <p>{props.text7}</p>
                <p>{props.text8}</p>
                <p>{props.text9}</p>
                <p>{props.text10}</p>
                <p>{props.text11}</p>
            </div>
            <Footer/>
        </>
     );
}

export default LabelModule;