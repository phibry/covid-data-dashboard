import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';

// components
import Navbar from './components/layout/navigation/Navbar';

// pages
import Home from './pages/Home';
import Vaccinations from './pages/Vaccinations';
import Deaths from './pages/Deaths';
import Hospitalisations from './pages/Hospitalisations';
import Certificates from './pages/Certificates';
import Global from './pages/Global';
import About from './pages/About';
import NotFound from './pages/NotFound';

// icons
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div data-theme={theme}>
      <Router>
        <Navbar />
        <button className='btn btn-theme' onClick={switchTheme}>
          {theme === 'light' ? <RiMoonFill /> : <RiSunFill />}
        </button>

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
