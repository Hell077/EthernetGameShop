import style from './label.module.css'
import Footer from '../Footer/footer';

function LabelModule(props) {
    return ( 
        <>
            <div className={style.MainLabel}>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
            <Footer/>
        </>
     );
}

export default LabelModule;