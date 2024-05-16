import ReactDOM from 'react-dom/client';
import MainPage from '../pages/mainPage';
import NotFoundPage from '../pages/notFoundPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from '../pages/aboutPage';
import ReturnPage from '../pages/returnPage';
import UserConfirmPage from '../pages/userconfirmPage';
import ConfPage from '../pages/confidentialityPage';


import './root.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="about" element={<AboutPage />}/>
      <Route path="return" element={<ReturnPage/>}/>
      <Route path="confirm" element={<UserConfirmPage/>}/>
      <Route path="confident" element={<ConfPage/>}/>
    </Routes>
  </BrowserRouter>
);
