// reducer
import { MobNavigationActionType } from './MobNavigationToggleReducer';
import mobNavigationToggleReducer from './MobNavigationToggleReducer';
import { createContext, useReducer } from 'react';

type MobNavigationToggleProps = {
  isMobNavigationActive: boolean;
  setIsMobNavigationActive: () => void;
};

const MobNavigationToggleContext = createContext<
  Partial<MobNavigationToggleProps>
>({});

export const MobNavigationToggleProvidor: React.FC = ({ children }) => {
  const initialState = false;

  const [state, dispatch] = useReducer(
    mobNavigationToggleReducer,
    initialState
  );

  const setIsMobNavigationActive = () => {
    dispatch({
      type: MobNavigationActionType.TOGGLE_NAV,
      payload: !state,
    });
  };

  return (
    <MobNavigationToggleContext.Provider
      value={{
        isMobNavigationActive: state,
        setIsMobNavigationActive: setIsMobNavigationActive,
      }}
    >
      {children}
    </MobNavigationToggleContext.Provider>
  );
};

export default MobNavigationToggleContext;
