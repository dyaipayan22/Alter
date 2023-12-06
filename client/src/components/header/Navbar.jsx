import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Menu, ShoppingCart, X } from 'lucide-react';

import { NAV_LINKS } from '../../utils/constants';

import Button from '../ui/Button';
import Cart from '../../pages/Cart';

const Navbar = () => {
  const navigate = useNavigate();

  const [showMobileNav, setShowMobileNav] = useState(false);
  const authInfo = useSelector((state) => state.auth.authInfo);

  const toggleView = () => {
    setShowMobileNav(!showMobileNav);
  };
  return (
    <div className="relative w-full flex items-center container py-3 z-30 border-2 lg:justify-between lg:gap-12">
      <Link to={'/'}>Alter</Link>

      <div className="flex grow items-center justify-between">
        <ul className="hidden lg:flex lg:gap-8">
          {NAV_LINKS?.map((item) => (
            <Link to={item.link} key={item.label}>
              <span className="hover:font-bold">{item.label}</span>
            </Link>
          ))}
        </ul>

        <div className="flex items-center gap-8">
          <ShoppingCart className="cursor-pointer w-6 h-6" />
          <Button label={'Sign In'} onClick={() => navigate('/sign-in')} />
        </div>
      </div>

      <div onClick={toggleView} className="inline-block lg:hidden ">
        {showMobileNav ? <X /> : <Menu />}
      </div>
    </div>
  );
};

export default Navbar;
