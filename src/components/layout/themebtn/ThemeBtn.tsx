import useLocalStorage from 'use-local-storage';
import { useContext } from 'react';

// icons
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

// context
import ThemeToggleContext from '../../../context/theme/ThemeToggleContext';

const ThemeBtn: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeToggleContext);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme?.(newTheme);
  };

  return (
    <button className='btn btn-theme' onClick={switchTheme}>
      {theme === 'light' ? <RiMoonFill /> : <RiSunFill />}
    </button>
  );
};

export default ThemeBtn;
