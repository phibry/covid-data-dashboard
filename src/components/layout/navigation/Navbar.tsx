// components
import NavItem from './NavItem';
import NavAppIconItem from './NavAppIconItem';

// icons
import {
  RiHomeLine,
  RiSkullLine,
  RiSyringeLine,
  RiHospitalLine,
  RiGlobalLine,
  RiShieldCheckLine,
} from 'react-icons/ri';
import { IoInformation } from 'react-icons/io5';
import { MdCoronavirus } from 'react-icons/md';

const Navbar: React.FC = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>
        <NavAppIconItem icon={<MdCoronavirus />} />
        <NavItem icon={<RiHomeLine />} path='/' />
        <NavItem icon={<RiSyringeLine />} path='/vaccinations' />
        <NavItem icon={<RiSkullLine />} path='/deaths' />
        <NavItem icon={<RiHospitalLine />} path='/hospitalisations' />
        <NavItem icon={<RiShieldCheckLine />} path='/certificates' />
        <NavItem icon={<RiGlobalLine />} path='/global' />
        <NavItem icon={<IoInformation />} path='/about' />
      </ul>
    </nav>
  );
};

export default Navbar;
