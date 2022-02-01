import { IconBaseProps } from 'react-icons';
import { NavLink, useLocation } from 'react-router-dom';

type Props = {
  icon: IconBaseProps;
  path: string;
};

const NavItem: React.FC<Props> = (props) => {
  const location = useLocation();

  return (
    <li
      className={`nav-item ${props.path === '/about' ? 'nav-item-about' : ''} ${
        location.pathname === props.path ? 'active' : ''
      }`}
    >
      <NavLink to={props.path}>{props.icon}</NavLink>
    </li>
  );
};

export default NavItem;
