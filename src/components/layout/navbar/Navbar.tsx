// components
import NavItem from './NavItem';
import NavAppIconItem from './NavAppIconItem';
import CloseBtn from '../closebtn/CloseBtn';

// constants
import * as PATH from '../../../utils/constants/paths';
import * as TITLE from '../../../utils/constants/title';

// context
import MobNavigationToggleContext from '../../../context/navigation/MobNavigationToggleContext';

// styles
import './_navbar.scss';

// icons
import {
  RiHomeLine,
  RiVirusLine,
  RiSkullLine,
  RiSyringeLine,
  RiHospitalLine,
  RiGlobalLine,
  RiShieldCheckLine,
  RiGithubLine,
  RiCloseLine,
} from 'react-icons/ri';
import { IoInformation } from 'react-icons/io5';
import { MdCoronavirus } from 'react-icons/md';
import { useContext } from 'react';

const Navbar: React.FC = () => {
  const { isMobNavigationActive } = useContext(MobNavigationToggleContext);

  return (
    <nav className={`navbar ${isMobNavigationActive ? 'navbar-mob-show' : ''}`}>
      <CloseBtn />
      <ul className='navbar-nav'>
        <NavAppIconItem icon={<MdCoronavirus />} />
        <NavItem icon={<RiHomeLine />} path={PATH.HOME} title={TITLE.HOME} />
        <NavItem icon={<RiVirusLine />} path={PATH.CASES} title={TITLE.CASES} />
        <NavItem
          icon={<RiSyringeLine />}
          path={PATH.VACCINATIONS}
          title={TITLE.VACCINATIONS}
        />
        <NavItem
          icon={<RiSkullLine />}
          path={PATH.DEATHS}
          title={TITLE.DEATHS}
        />
        <NavItem
          icon={<RiHospitalLine />}
          path={PATH.HOSPITALISTIONS}
          title={TITLE.HOSPITALISTIONS}
        />
        <NavItem
          icon={<RiShieldCheckLine />}
          path={PATH.CERTIFICATES}
          title={TITLE.CERTIFICATES}
        />
        <NavItem
          icon={<RiGlobalLine />}
          path={PATH.GLOBAL}
          title={TITLE.GLOBAL}
        />
        <NavItem
          icon={<IoInformation />}
          path={PATH.ABOUT}
          title={TITLE.ABOUT}
        />
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
