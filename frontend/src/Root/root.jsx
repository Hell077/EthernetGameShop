import ReactDOM from 'react-dom/client';
import MainPage from '../pages/mainPage';
import NotFoundPage from '../pages/notFoundPage';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
=======
import AboutPage from '../pages/aboutPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
>>>>>>> 026e15a236b33964e02b62a11c09cf62f42311c3

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
