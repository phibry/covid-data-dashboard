// icons
import { RiCloseLine } from 'react-icons/ri';

// context
import MobNavigationToggleContext from '../../../context/navigation/MobNavigationToggleContext';
import { useContext } from 'react';

// styles
import './_closeBtn.scss';

const CloseBtn = () => {
  const { isMobNavigationActive, setIsMobNavigationActive } = useContext(
    MobNavigationToggleContext
  );

  const minimizeNav = () => {
    isMobNavigationActive && setIsMobNavigationActive?.();
  };

  return (
    <button className='btn btn-close' onClick={minimizeNav}>
      <RiCloseLine />
    </button>
  );
};

export default CloseBtn;
