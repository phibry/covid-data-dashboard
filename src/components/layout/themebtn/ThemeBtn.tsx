import { useContext, useEffect } from 'react';

// icons
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

// context
import ThemeToggleContext from '../../../context/theme/ThemeToggleContext';

// styles
import './_themebtn.scss';

const ThemeBtn: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeToggleContext);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme?.(newTheme);
  };

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <button className='btn btn-theme' onClick={switchTheme}>
      {theme === 'light' ? <RiMoonFill /> : <RiSunFill />}
    </button>
  );
};

export default ThemeBtn;
