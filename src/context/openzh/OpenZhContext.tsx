import { createContext, useReducer } from 'react';

// types
import { dailyCase } from '../../utils/types/covidOpenZhTypes';
import { Action } from './OpenZhReducer';

// reducer
import openZhReducer from './OpenZhReducer';

type OpenZhProps = {
  dailyCase: dailyCase;
  loading: boolean;
  dispatch: React.Dispatch<Action>;

  currentData: () => Promise<dailyCase>;
};

const OpenZhContext = createContext<Partial<OpenZhProps>>({});

export const OpenZhContextProvidor: React.FC = ({ children }) => {
  const initialState = {
    dailyCase: {
      totals: null,
      records: [],
    },
    loading: false,
  };

  const [state, dispatch] = useReducer(openZhReducer, initialState);

  return (
    <OpenZhContext.Provider value={{ ...state, dispatch }}>
      {children}
    </OpenZhContext.Provider>
  );
};

export default OpenZhContext;
