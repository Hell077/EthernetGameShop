import style from './footer.module.css'
import PayImage from './PayImage/payImage';
import FooterBtns from './FooterBTN/footerBTN';
//Image import \/ use .svg imagetype only
import Visa from './PayImage/Images/visaLogo.svg'
import MasterCard from './PayImage/Images/MastercardLogo.svg'
import PayPal from './PayImage/Images/PayPal.svg.png'

function Footer(props) {
    return (
        <footer style={{bottom: props.bottom}}>
            <div className={style.FooterContent}>
                <div className={style.TopContainer}>
                    <PayImage Image={Visa} />
                    <PayImage Image={MasterCard} />
                    <PayImage Image={PayPal} />
                </div>
                <hr />
                <div className={style.BottomContainer}>
                    <div className={style.fraction}>
                        <FooterBtns title="Главная"  path = "/main"/>
                    </div>
                    <div className={style.fraction}>
                        <FooterBtns title="О нас" path = "/about"/>
                        <FooterBtns title="Политика возврата" path = "/return"/>
                    </div>
                    <div className={style.fraction}>
                        <FooterBtns title="Пользовательское соглашение"  path = "/confirm"/>
                        <FooterBtns title="Политика конфиденциальности"  path = "/confident"/>
                        <FooterBtns title="Согласие на обработку персональных данных"  path = "/person"/>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;