import ReactDOM from 'react-dom/client'
import MainPage from '../pages/mainPage';
// import NotFoundPage from '../pages/notFoundPage'
import './root.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <MainPage/>
     {/* <NotFoundPage/> */}
     
    </BrowserRouter>

)
