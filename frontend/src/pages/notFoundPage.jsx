import style from './pagesMainStyle/notFoundPage.module.css'
import { Link } from 'react-router-dom'

function NotFoundPage() {
    return (
        <>
            <div className={style.flex}>
                <div className={style.content}>
                    <p>Такой страницы не существует</p>
                    <Link to= '/'>
                        <button>На главную</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default NotFoundPage;