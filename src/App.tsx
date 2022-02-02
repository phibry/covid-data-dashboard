import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';

// components
import Navbar from './components/layout/navigation/Navbar';
import ThemeBtn from './components/layout/themebtn/ThemeBtn';

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
import ThemeToggleContext from './context/theme/ThemeToggleContext';

function App() {
  const { theme } = useContext(ThemeToggleContext);
  return (
    <div data-theme={theme}>
      <Router>
        <Navbar />
        <ThemeBtn />
        <main className='main margin-left-nav'>
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
      </Router>
    </div>
  );
}

export default App;
