import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Menu, ShoppingCart, X } from 'lucide-react';

import { NAV_LINKS } from '../../utils/constants';

import Button from '../ui/Button';
import Cart from '../../pages/Cart';
import Search from '../Search';

const Navbar = () => {
  const navigate = useNavigate();

  const [showMobileNav, setShowMobileNav] = useState(false);
  const userInfo = useSelector((state) => state.user.userInfo);

  const toggleView = () => {
    setShowMobileNav(!showMobileNav);
  };
  return (
    <div className="relative bg-primary text-secondary w-full flex items-center container py-3 z-30 border-2 lg:justify-between lg:gap-12">
      <Link to={'/'}>Alter</Link>

      <div className="flex grow items-center justify-between">
        <ul className="hidden lg:flex lg:gap-8">
          {NAV_LINKS?.map((item) => (
            <Link to={item.link} key={item.label}>
              <span className="hover:font-bold">{item.label}</span>
            </Link>
          ))}
        </ul>
        <Search />
        <div className="flex items-center gap-8">
          <div className="relative">
            <ShoppingCart />
            <div className="absolute right-0 -top-2 bg-red-300 w-4 h-4 flex items-center justify-center rounded-full">
              <span className=" text-white text-sm">1</span>
            </div>
          </div>
          {/* {userInfo ? (
            <Button label={userInfo.name} />
          ) : (
            <Button label={'Sign In'} onClick={() => navigate('/sign-in')} />
          )} */}
        </div>
      </div>

      {/* <div onClick={toggleView} className="inline-block lg:hidden ">
        {showMobileNav ? <X /> : <Menu />}
      </div> */}
    </div>
  );
};

export default Navbar;
