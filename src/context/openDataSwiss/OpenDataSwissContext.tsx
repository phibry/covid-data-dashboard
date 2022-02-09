import { createContext, useReducer } from 'react';

// types
import {
  openDataSwissCovidContext,
  openDataSwissCovidData,
  openDataSwissCovidTotals,
  openDataSwissCovidHospCapacity,
} from '../../utils/types/covidOpenDataSwissTypes';
import { Action } from './OpenDataSwissReducer';

// reducer
import openDataSwissReducer from './OpenDataSwissReducer';

type OpenDataSwissProps = {
  covidContext: openDataSwissCovidContext;
  covidCases: Array<openDataSwissCovidData>;
  covidDeaths: Array<openDataSwissCovidData>;
  covidHosp: Array<openDataSwissCovidData>;
  covidHospCapacity: Array<openDataSwissCovidHospCapacity>;
  totals: openDataSwissCovidTotals;
  loading: boolean;
  dispatch: React.Dispatch<Action>;

  getDataVersion: () => Promise<openDataSwissCovidContext>;
  getData: (type: string) => Promise<any>;
};

const OpenDataSwissContext = createContext<Partial<OpenDataSwissProps>>({});

export const OpenDataSwissProvidor: React.FC = ({ children }) => {
  const initialState = {
    covidCases: [] as Array<openDataSwissCovidData>,
    covidDeaths: [] as Array<openDataSwissCovidData>,
    covidHosp: [] as Array<openDataSwissCovidData>,
    covidHospCapacity: [] as Array<openDataSwissCovidHospCapacity>,
    covidContext: {} as openDataSwissCovidContext,
    totals: {} as openDataSwissCovidTotals,
    loading: false,
  };

  const [state, dispatch] = useReducer(openDataSwissReducer, initialState);

  return (
    <OpenDataSwissContext.Provider value={{ ...state, dispatch }}>
      {children}
    </OpenDataSwissContext.Provider>
  );
};

export default OpenDataSwissContext;
