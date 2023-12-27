import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Menu, ShoppingCart, User, X } from 'lucide-react';

import { NAV_LINKS } from '../../utils/constants';

import Button from '../ui/Button';
import Search from '../Search';
import { cn } from '../../lib/utils';
import { getItems } from '../../features/cart/cartApi';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showMobileNav, setShowMobileNav] = useState(false);
  const userInfo = useSelector((state) => state.user.userInfo);
  // const cartItems = useSelector((state) => state.cart.cartItems);

  // useEffect(() => {
  //   dispatch(getItems());
  // }, [dispatch]);

  return (
    <nav className="bg-white container shadow-md">
      <div className="flex items-center justify-between h-14 lg:h-16">
        <div className="grow flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* <Menu
              className="cursor-pointer lg:hidden w-5 h-5"
              onClick={() => setShowMobileNav(true)}
            /> */}
            <Link to={'/'} className="text-3xl">
              Alter
            </Link>
          </section>

          {NAV_LINKS.map((item) => (
            <Link
              key={item.link}
              className="hidden lg:block text-sm uppercase font-medium"
              to={item.link}
            >
              {item.label}
            </Link>
          ))}
          <Search />
        </div>

        {/* <div
          className={cn(
            'fixed h-full w-screen lg:hidden top-0 right-0 -translate-x-full transition-all z-40',
            showMobileNav && 'bg-black/50 backdrop-blur-sm translate-x-0'
          )}
        >
          <section className="bg-white text-black flex-col absolute top-0 h-screen p-8 gap-4 z-[100] w-4/5 flex">
            <X
              className="cursor-pointer mt-0 mb-8 w-5 h-5"
              onClick={() => setShowMobileNav(false)}
            />
            <Search />
            {NAV_LINKS.map((item) => (
              <Link key={item.link} className="font-bold" to={item.link}>
                {item.label}
              </Link>
            ))}
          </section>
        </div> */}

        <section className="flex items-center gap-8">
          {/* <div className="hidden relative w-10 h-10 lg:flex items-center cursor-pointer">
            <ShoppingCart className="h-[20px] w-[20px]" />
            {cartItems !== null && cartItems.length >= 1 && (
              <span className="absolute top-0 right-2 w-5 h-5 bg-primary-200 text-background-200 flex items-center rounded-full justify-center text-xs font-bold">
                {cartItems.length}
              </span>
            )}
          </div> */}
          {userInfo ? (
            <span className="capitalize font-medium">{userInfo.name}</span>
          ) : (
            <Button
              label={'Sign In'}
              onClick={() => navigate('/sign-in')}
              size={'lg'}
            />
          )}
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
