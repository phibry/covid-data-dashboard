import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';

// components
import Navbar from './components/layout/navbar/Navbar';
import ThemeBtn from './components/layout/themebtn/ThemeBtn';
import MobNavBtn from './components/layout/navbar/MobNavBtn';

// pages
import Home from './pages/Home';
import Cases from './pages/Cases';
import Vaccinations from './pages/Vaccinations';
import Deaths from './pages/Deaths';
import Hospitalisations from './pages/Hospitalisations';
import Certificates from './pages/Certificates';
import Global from './pages/Global';
import About from './pages/About';
import NotFound from './pages/NotFound';

// constants
import * as PATH from './utils/constants/paths';

// context
import ThemeToggleContext from './context/theme/ThemeToggleContext';
import { MobNavigationToggleProvidor } from './context/navigation/MobNavigationToggleContext';

function App() {
  const { theme } = useContext(ThemeToggleContext);
  return (
    <div data-theme={theme}>
      <Router>
        <MobNavigationToggleProvidor>
          <Navbar />
          <ThemeBtn />
          <MobNavBtn />
        </MobNavigationToggleProvidor>

        <main className='main'>
          <Routes>
            <Route path={PATH.HOME} element={<Home />} />
            <Route path={PATH.CASES} element={<Cases />} />
            <Route path={PATH.VACCINATIONS} element={<Vaccinations />} />
            <Route path={PATH.DEATHS} element={<Deaths />} />
            <Route path={PATH.HOSPITALISTIONS} element={<Hospitalisations />} />
            <Route path={PATH.CERTIFICATES} element={<Certificates />} />
            <Route path={PATH.GLOBAL} element={<Global />} />
            <Route path={PATH.ABOUT} element={<About />} />
            <Route path={PATH.NOT_FOUND} element={<NotFound />} />
            <Route path={PATH.ANY} element={<NotFound />} />
            <Route />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
