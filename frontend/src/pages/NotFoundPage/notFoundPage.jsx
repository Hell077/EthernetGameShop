
import { Link } from 'react-router-dom';
import style from './notFoundPage.module.css';


function NotFoundPage() {


  return (
    <div className={style.flex}>
      <div className={style.content}>
        <p>Такой страницы не существует</p>
        <Link to="/main">
          <button>На главную</button>
        </Link>
    
      </div>
    </div>
  );
}

export default NotFoundPage;
