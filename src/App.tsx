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
  getHospCapacity,
  getVacc,
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
      const covidContextData = await getDataVersion();
      dispatch?.({
        type: OpenDataSwissActionType.GET_DATA_CONTEXT,
        payload: covidContextData,
      });

      // cases
      const covidCases = await getData(
        covidContextData?.dataVersion,
        'COVID19Cases_geoRegion',
        'CHFL'
      );
      dispatch?.({
        type: OpenDataSwissActionType.GET_DATA_CASES,
        payload: covidCases,
      });

      // deaths
      const covidDeaths = await getData(
        covidContextData?.dataVersion,
        'COVID19Death_geoRegion',
        'CHFL'
      );
      dispatch?.({
        type: OpenDataSwissActionType.GET_DATA_DEATHS,
        payload: covidDeaths,
      });

      // hosp
      const covidHosp = await getData(
        covidContextData?.dataVersion,
        'COVID19Hosp_geoRegion',
        'CHFL'
      );
      dispatch?.({
        type: OpenDataSwissActionType.GET_DATA_HOSP,
        payload: covidHosp,
      });

      // hosp capacity
      const covidHospCapacity = await getHospCapacity(
        covidContextData?.dataVersion
      );
      dispatch?.({
        type: OpenDataSwissActionType.GET_DATA_HOSP_CAPACITY,
        payload: covidHospCapacity,
      });

      // vacc
      // const covidAtLeastOneDoesVacc = await getVacc(
      //   covidContextData?.dataVersion,
      //   'CHFL',
      //   'COVID19AtLeastOneDosePersons'
      // );
      // const covidFirstBoosterVacc = await getVacc(
      //   covidContextData?.dataVersion,
      //   'CHFL',
      //   'COVID19FirstBoosterPersons'
      // );
      // const covidFullVacc = await getVacc(
      //   covidContextData?.dataVersion,
      //   'CHFL',
      //   'COVID19FullyVaccPersons'
      // );
      // const covidPartiallyVacc = await getVacc(
      //   covidContextData?.dataVersion,
      //   'CHFL',
      //   'COVID19PartiallyVaccPersons'
      // );
      // const covidNotVacc = await getVacc(
      //   covidContextData?.dataVersion,
      //   'CHFL',
      //   'COVID19NotVaccPersons'
      // );

      // console.log(covidAtLeastOneDoesVacc[covidAtLeastOneDoesVacc.length - 1]);
      // console.log(covidFirstBoosterVacc[covidFirstBoosterVacc.length - 1]);
      // console.log(covidFullVacc[covidFullVacc.length - 1]);
      // console.log(covidPartiallyVacc[covidPartiallyVacc.length - 1]);
      // console.log(covidNotVacc[covidNotVacc.length - 1]);

      const currentCase = covidCases[covidCases.length - 1];
      const currentHosp = covidHosp[covidHosp.length - 1];
      const currentHospCapacity =
        covidHospCapacity[covidHospCapacity.length - 1];
      const currentDeaths = covidDeaths[covidDeaths.length - 1];

      if (currentCase && currentHosp && currentDeaths)
        dispatch?.({
          type: OpenDataSwissActionType.GET_DATA_TOTALS,
          payload: {
            currentCase,
            currentHosp,
            currentDeaths,
            currentHospCapacity,
          },
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
