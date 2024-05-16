import style from './footer.module.css'
import PayImage from './PayImage/payImage';
import FooterBtns from './FooterBTN/footerBTN';

//Image import \/ use .svg imagetype only
import Visa from './PayImage/Images/visaLogo.svg'
import MasterCard from './PayImage/Images/MastercardLogo.svg'
import PayPal from './PayImage/Images/PayPal.svg.png'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <footer>
            <div className={style.FooterContent}>
                <div className={style.TopContainer}>
                    <PayImage Image={Visa} />
                    <PayImage Image={MasterCard} />
                    <PayImage Image={PayPal} />
                </div>
                <hr />
                <div className={style.BottomContainer}>
                    <div className={style.fraction}>
<<<<<<< HEAD
                        <FooterBtns title="Главная" path = "/"/>
                    </div>
                    <div className={style.fraction}>
                        <FooterBtns title="О нас" />
=======
                        <Link to='/'>
                            <FooterBtns title="Главная" />
                        </Link>
                    </div>
                    <div className={style.fraction}>
                        <Link to='AboutUs'>
                            <FooterBtns title="О нас" />
                        </Link>
                        <Link to='Policy'>
                            <FooterBtns title="Политика возврата" />
                        </Link>
>>>>>>> 026e15a236b33964e02b62a11c09cf62f42311c3
                    </div>
                    <div className={style.fraction}>
                        <Link to='UserPolicy'>
                            <FooterBtns title="Пользовательское соглашение" />
                        </Link>
                        <Link to='Confidithional'>
                            <FooterBtns title="Политика конфиденциальности" />
                        </Link>
                        <Link to='PersonalData'>
                            <FooterBtns title="Согласие на обработку персональных данных" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;