import { IconBaseProps } from 'react-icons';
import { Link } from 'react-router-dom';

// constants
import { HOME } from '../../../utils/constants/paths';

// context
import MobNavigationToggleContext from '../../../context/navigation/MobNavigationToggleContext';
import { useContext } from 'react';

type Props = {
  icon: IconBaseProps;
};

const NavAppIconItem: React.FC<Props> = (props) => {
  const { isMobNavigationActive, setIsMobNavigationActive } = useContext(
    MobNavigationToggleContext
  );

  const minimizeNav = () => {
    isMobNavigationActive && setIsMobNavigationActive?.();
  };

  return (
    <li className='nav-app-icon-item'>
      <Link to={HOME} onClick={minimizeNav}>
        {props.icon}
      </Link>
    </li>
  );
};

export default NavAppIconItem;
