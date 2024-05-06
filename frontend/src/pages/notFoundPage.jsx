import style from './pagesMainStyle/notFoundPage.module.css'


function NotFoundPage() {
    return (
        <>
            <div className={style.flex}>
                <div className={style.content}>
                    <p>Такой страницы не существует</p>
                    <button>На главную</button>
                </div>
            </div>


        </>
    );
}

export default NotFoundPage;