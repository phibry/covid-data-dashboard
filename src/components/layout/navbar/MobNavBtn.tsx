import { useContext } from 'react';

// context
import MobNavigationToggleContext from '../../../context/navigation/MobNavigationToggleContext';

// styles
import './_navbar.scss';

const MobNavBtn = () => {
  const { setIsMobNavigationActive } = useContext(MobNavigationToggleContext);

  const toggleNav = () => {
    setIsMobNavigationActive?.();
  };

  return (
    <button className='btn btn-mob-nav' onClick={toggleNav}>
      <div className='line line1'></div>
      <div className='line line2'></div>
    </button>
  );
};

export default MobNavBtn;
