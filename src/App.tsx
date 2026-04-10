import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToHash from './components/ScrollToHash/ScrollToHash';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToHash />

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
