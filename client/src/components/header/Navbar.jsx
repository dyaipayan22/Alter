import { useState } from 'react';
import { Link } from 'react-router-dom';

import { NAV_LINKS } from '../../utils/constants';
import Cart from '../../pages/Cart';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleView = () => {
    setShowMobileNav(!showMobileNav);
  };
  return (
    <div className="relative flex items-center justify-between container z-30 py-5 border-2">
      <Link to={'/'}>Alter</Link>

      <ul className="hidden lg:flex lg:gap-8">
        {NAV_LINKS?.map((item) => (
          <Link to={item.link} key={item.label}>
            <span>{item.label}</span>
          </Link>
        ))}
      </ul>

      <div onClick={toggleView} className="inline-block lg:hidden ">
        {showMobileNav ? <X /> : <Menu />}
      </div>
    </div>
  );
};

export default Navbar;
