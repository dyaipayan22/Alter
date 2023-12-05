import { Link } from 'react-router-dom';

import { NAV_LINKS } from '../../utils/constants';
import Cart from '../../pages/Cart';
import { useState } from 'react';

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <header className="bg-white w-full flex items-center h-12 md:h-14 lg:h-16 sticky z-[20] top-0 shadow-md">
      <div className="container flex items-center gap-4">
        {NAV_LINKS?.map((item) => (
          <Link to={item.link} key={item.label}>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
      <button onClick={() => setShowCart(!showCart)}>Cart</button>
      {showCart && <Cart />}
    </header>
  );
};

export default Header;
