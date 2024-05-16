import style from './pagesMainStyle/notFoundPage.module.css'
import Footer from '../modules/Footer/footer';
import { Link } from 'react-router-dom';


function NotFoundPage() {
    return (
        <>
            <div className={style.flex}>
                <div className={style.content}>
                    <p>Такой страницы не существует</p>
                    <button>
                        <Link to="/" className={style.link}>На главную</Link>
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default NotFoundPage;