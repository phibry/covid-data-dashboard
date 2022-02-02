import { IconBaseProps } from 'react-icons';
import { NavLink, useLocation } from 'react-router-dom';

// constants
import { ABOUT } from '../../../utils/constants/paths';

// context
import MobNavigationToggleContext from '../../../context/navigation/MobNavigationToggleContext';
import { useContext } from 'react';

type Props = {
  icon: IconBaseProps;
  path: string;
  title: string;
};

const NavItem: React.FC<Props> = (props) => {
  const { isMobNavigationActive, setIsMobNavigationActive } = useContext(
    MobNavigationToggleContext
  );

  const location = useLocation();

  const minimizeNav = () => {
    isMobNavigationActive && setIsMobNavigationActive?.();
  };

  return (
    <li
      className={`nav-item ${props.path === ABOUT ? 'nav-item-about' : ''} ${
        location.pathname === props.path ? 'active' : ''
      }`}
    >
      <NavLink to={props.path} onClick={minimizeNav}>
        {props.icon} <span className='nav-item-title'>{props.title}</span>
      </NavLink>
    </li>
  );
};

export default NavItem;
