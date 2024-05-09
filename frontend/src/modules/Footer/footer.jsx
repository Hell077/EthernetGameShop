import style from './footer.module.css'
import PayImage from './PayImage/payImage';
import FooterBtns from './FooterBTN/footerBTN';

//Image import \/ use .svg imagetype only
import Visa from './PayImage/Images/visaLogo.svg'
import MasterCard from './PayImage/Images/MastercardLogo.svg'
import PayPal from './PayImage/Images/PayPal.svg.png'


function Footer() {
    return (
        <footer>
            <div className={style.FooterContent}>
                <div className={style.TopContainer}>
                    <PayImage Image={Visa} />
                    <PayImage Image={MasterCard} />
                    <PayImage Image={PayPal} />
                </div>
                
                <div className={style.BottomContainer}>
                    <div className={style.fraction}></div>
                    <hr />
                    <div className={style.fraction}></div>
                    <hr />
                    <div className={style.fraction}>
                        <FooterBtns title = '123'/></div>     
                </div>

            </div>
        </footer>
    );
}

export default Footer;