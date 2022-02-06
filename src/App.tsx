import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import useAsyncEffect from 'use-async-effect';

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

import { getDataVersion } from './context/openDataSwiss/OpenDataSwissActions';

// actiontype
import { OpenDataSwissActionType } from './context/openDataSwiss/OpenDataSwissReducer';

// context
import ThemeToggleContext from './context/theme/ThemeToggleContext';
import { MobNavigationToggleProvidor } from './context/navigation/MobNavigationToggleContext';
import { OpenZhContextProvidor } from './context/openzh/OpenZhContext';
import { OpenDataSwissProvidor } from './context/openDataSwiss/OpenDataSwissContext';
import OpenDataSwissContext from './context/openDataSwiss/OpenDataSwissContext';

function App() {
  const { theme } = useContext(ThemeToggleContext);
  const { dispatch, covidContext } = useContext(OpenDataSwissContext);

  // const [test, setTest] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     const covidContext = await getDataVersion?.();
  //     console.log(covidContext);

  //     dispatch?.({
  //       type: OpenDataSwissActionType.GET_DATA_CONTEXT,
  //       payload: covidContext,
  //     });
  //   })();
  // }, [covidContext]);

  const handleLoading = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('click');

    const covidContextData = await getDataVersion?.();
    // console.log(covidContext);

    console.log(covidContextData);
    dispatch?.({ type: OpenDataSwissActionType.SET_LOADING });
    dispatch?.({
      type: OpenDataSwissActionType.GET_DATA_CONTEXT,
      payload: covidContextData,
    });
  };

  // useAsyncEffect(async () => {
  //   const covidContext = await getDataVersion?.();
  //   console.log(covidContext);

  //   dispatch?.({
  //     type: OpenDataSwissActionType.GET_DATA_CONTEXT,
  //     payload: covidContext,
  //   });
  // }, []);

  // useEffect(() => {
  //   const getContext = async () => {
  //     const covidContextData = await getDataVersion?.();
  //     console.log(covidContextData);
  //     dispatch?.({
  //       type: OpenDataSwissActionType.GET_DATA_CONTEXT,
  //       payload: covidContextData,
  //     });
  //   };

  //   getContext();
  // }, [dispatch, covidContext]);

  return (
    <div data-theme={theme}>
      <OpenDataSwissProvidor>
        {/* <OpenZhContextProvidor> */}
        <Router>
          <MobNavigationToggleProvidor>
            <Navbar />
            <ThemeBtn />
            <MobNavBtn />
          </MobNavigationToggleProvidor>

          <main className='main'>
            <button onClick={handleLoading} style={{ color: 'red' }}>
              Hello
            </button>
            <Routes>
              <Route path={PATH.HOME} element={<Home />} />
              <Route path={PATH.CASES} element={<Cases />} />
              <Route path={PATH.VACCINATIONS} element={<Vaccinations />} />
              <Route path={PATH.DEATHS} element={<Deaths />} />
              <Route
                path={PATH.HOSPITALISTIONS}
                element={<Hospitalisations />}
              />
              <Route path={PATH.CERTIFICATES} element={<Certificates />} />
              <Route path={PATH.GLOBAL} element={<Global />} />
              <Route path={PATH.ABOUT} element={<About />} />
              <Route path={PATH.NOT_FOUND} element={<NotFound />} />
              <Route path={PATH.ANY} element={<NotFound />} />
              <Route />
            </Routes>
          </main>
        </Router>
        {/* </OpenZhContextProvidor> */}
      </OpenDataSwissProvidor>
    </div>
  );
}

export default App;
