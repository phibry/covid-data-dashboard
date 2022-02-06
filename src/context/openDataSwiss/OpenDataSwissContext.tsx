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
  covidData: openDataSwissCovidData;
  loading: boolean;
  dispatch: React.Dispatch<Action>;

  getDataVersion: () => Promise<openDataSwissCovidContext>;
};

const OpenDataSwissContext = createContext<Partial<OpenDataSwissProps>>({});

export const OpenDataSwissProvidor: React.FC = ({ children }) => {
  const initialState = {
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
