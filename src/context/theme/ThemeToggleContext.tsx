import { createContext, useReducer } from 'react';
import useLocalStorage from 'use-local-storage';

// reducer
import { ThemeActionType } from './ThemeToggleReducer';
import themeToggleReducer from './ThemeToggleReducer';

type ThemeToggleProps = {
  theme: string;
  setTheme: (theme: string) => void;
};

const ThemeToggleContext = createContext<Partial<ThemeToggleProps>>({});

export const ThemeToggleProvidor: React.FC = ({ children }) => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [themeLS, setThemeLS] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  const initialState = themeLS;

  const [state, dispatch] = useReducer(themeToggleReducer, initialState);

  const setTheme = (theme: string) => {
    dispatch({
      type: ThemeActionType.SET_THEME,
      payload: theme,
    });
    setThemeLS(theme);
  };

  return (
    <ThemeToggleContext.Provider value={{ theme: state, setTheme: setTheme }}>
      {children}
    </ThemeToggleContext.Provider>
  );
};

export default ThemeToggleContext;
