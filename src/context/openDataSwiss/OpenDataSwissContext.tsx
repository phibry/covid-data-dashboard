import { createContext, useReducer } from 'react';

// types
import {
  openDataSwissCovidContext,
  openDataSwissCovidData,
} from '../../utils/types/covidOpenDataSwissTypes';
import { Action } from './OpenDataSwissReducer';

// reducer
import openDataSwissReducer from './OpenDataSwissReducer';

type OpenDataSwissProps = {
  covidContext: openDataSwissCovidContext;
  // dataVersion: string | null;
  // sourceDate: string | null;
  covidData: openDataSwissCovidData;
  loading: boolean;
  dispatch: React.Dispatch<Action>;

  getDataVersion: () => Promise<openDataSwissCovidContext>;
};

const OpenDataSwissContext = createContext<Partial<OpenDataSwissProps>>({});

export const OpenDataSwissProvidor: React.FC = ({ children }) => {
  const initialState = {
    // dataVersion: null,
    // sourceDate: null,
    // covidContext: {
    //   sourceDate: null,
    //   dataVersion: null,
    // },
    // covidData: {
    //   geoRegion: null,
    //   datum: null,
    //   entries_diff_last: null,
    // },
    covidData: {} as openDataSwissCovidData,
    covidContext: {} as openDataSwissCovidContext,
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
