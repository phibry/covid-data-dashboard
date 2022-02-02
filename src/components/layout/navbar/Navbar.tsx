// components
import NavItem from './NavItem';
import NavAppIconItem from './NavAppIconItem';

// constants
import * as PATH from '../../../utils/constants/paths';

// styles
import './_navbar.scss';

// icons
import {
  RiHomeLine,
  RiSkullLine,
  RiSyringeLine,
  RiHospitalLine,
  RiGlobalLine,
  RiShieldCheckLine,
  RiGithubLine,
} from 'react-icons/ri';
import { IoInformation } from 'react-icons/io5';
import { MdCoronavirus } from 'react-icons/md';

const Navbar: React.FC = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>
        <NavAppIconItem icon={<MdCoronavirus />} />
        <NavItem icon={<RiHomeLine />} path={PATH.HOME} />
        <NavItem icon={<RiSyringeLine />} path={PATH.VACCINATIONS} />
        <NavItem icon={<RiSkullLine />} path={PATH.DEATHS} />
        <NavItem icon={<RiHospitalLine />} path={PATH.HOSPITALISTIONS} />
        <NavItem icon={<RiShieldCheckLine />} path={PATH.CERTIFICATES} />
        <NavItem icon={<RiGlobalLine />} path={PATH.GLOBAL} />
        <NavItem icon={<IoInformation />} path={PATH.ABOUT} />
      </ul>
      <ul className='navbar-nav footer'>
        <li className='nav-item nav-item-github'>
          <a href='https://github.com/phibry' target='_blank' rel='noreferrer'>
            <RiGithubLine />
          </a>
        </li>
        <li className='version'>v0.1.0</li>
      </ul>
    </nav>
  );
};

export default Navbar;
