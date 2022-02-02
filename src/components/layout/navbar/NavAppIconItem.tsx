import { IconBaseProps } from 'react-icons';
import { Link } from 'react-router-dom';

type Props = {
  icon: IconBaseProps;
};

const NavAppIconItem: React.FC<Props> = (props) => {
  return (
    <li className='nav-app-icon-item'>
      <Link to='/'>{props.icon}</Link>
    </li>
  );
};

export default NavAppIconItem;
