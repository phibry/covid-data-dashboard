import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useContext, useEffect } from 'react';

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

// actions
import {
  getDataVersion,
  getData,
} from './context/openDataSwiss/OpenDataSwissActions';

// actiontype
import { OpenDataSwissActionType } from './context/openDataSwiss/OpenDataSwissReducer';

// context
import ThemeToggleContext from './context/theme/ThemeToggleContext';
import { MobNavigationToggleProvidor } from './context/navigation/MobNavigationToggleContext';
import OpenDataSwissContext from './context/openDataSwiss/OpenDataSwissContext';

function App() {
  const { theme } = useContext(ThemeToggleContext);
  const { dispatch } = useContext(OpenDataSwissContext);

  useEffect(() => {
    const getContext = async () => {
      // context
      const covidContextData = await getDataVersion?.();
      dispatch?.({
        type: OpenDataSwissActionType.GET_DATA_CONTEXT,
        payload: covidContextData,
      });

      // cases
      const covidCases = await getData?.(
        covidContextData?.dataVersion,
        'COVID19Cases_geoRegion'
      );
      dispatch?.({
        type: OpenDataSwissActionType.GET_DATA_CASES,
        payload: covidCases,
      });

      // deaths
      const covidDeaths = await getData?.(
        covidContextData?.dataVersion,
        'COVID19Death_geoRegion'
      );
      dispatch?.({
        type: OpenDataSwissActionType.GET_DATA_DEATHS,
        payload: covidDeaths,
      });

      // hosp
      const covidHosp = await getData?.(
        covidContextData?.dataVersion,
        'COVID19Hosp_geoRegion'
      );
      dispatch?.({
        type: OpenDataSwissActionType.GET_DATA_HOSP,
        payload: covidHosp,
      });

      console.log(covidCases);
      console.log(covidHosp);
      console.log(covidDeaths);

      const currentCase = covidCases[covidCases.length - 1];
      const currentHosp = covidHosp[covidHosp.length - 1];
      const currentDeaths = covidDeaths[covidDeaths.length - 1];

      if (currentCase && currentHosp && currentDeaths)
        dispatch?.({
          type: OpenDataSwissActionType.GET_DATA_TOTALS,
          payload: { currentCase, currentHosp, currentDeaths },
        });
    };

    dispatch?.({ type: OpenDataSwissActionType.SET_LOADING });
    getContext().then(() =>
      dispatch?.({ type: OpenDataSwissActionType.UNSET_LOADING })
    );
  }, [dispatch]);

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
