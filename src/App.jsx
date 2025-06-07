import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import FitnessBLog from './pages/FitnessBLog';
import BeautyFashionBlog from './pages/BeautyFashionBlog';
import CookingBlog from './pages/CookingBlog';
import LifeStyleBlog from './pages/LifeStyleBlog';
import TravellBlog from './pages/TravellBlog';
import TechBlog from './pages/TechBlog';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/fitness" element={<FitnessBLog />} />
        <Route path="/beauty-fashion" element={<BeautyFashionBlog />} />
        <Route path="/Cooking" element={<CookingBlog />} />
        <Route path="/Life style" element={<LifeStyleBlog />} />
        <Route path="/travel" element={<TravellBlog />} />
        <Route path="/Tech" element={<TechBlog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;