import ReactDOM from 'react-dom/client';
import MainPage from '../pages/mainPage';
import NotFoundPage from '../pages/notFoundPage';
import AboutPage from '../pages/aboutPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './root.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="about" element={<AboutPage />}/>
    </Routes>
  </BrowserRouter>
);
