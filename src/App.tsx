import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// components
import Navbar from './components/layout/navigation/Navbar';
import Footer from './components/layout/Footer';

// pages
import Home from './pages/Home';
import Vaccinations from './pages/Vaccinations';
import Deaths from './pages/Deaths';
import Hospitalisations from './pages/Hospitalisations';
import Certificates from './pages/Certificates';
import Global from './pages/Global';
import About from './pages/About';
import NotFound from './pages/NotFound';

// context

function App() {
  return (
    <Router>
      <Navbar />

      <main className='main container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/vaccinations' element={<Vaccinations />} />
          <Route path='/deaths' element={<Deaths />} />
          <Route path='/hospitalisations' element={<Hospitalisations />} />
          <Route path='/certificates' element={<Certificates />} />
          <Route path='/global' element={<Global />} />
          <Route path='/about' element={<About />} />
          <Route path='/notfound' element={<NotFound />} />
          <Route path='/*' element={<NotFound />} />
          <Route />
        </Routes>
      </main>

      <footer className='footer container'>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
