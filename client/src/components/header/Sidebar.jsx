import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSolidDashboard, BiSolidTruck, BiSolidUser } from 'react-icons/bi';
import { BsBagFill } from 'react-icons/bs';

const menu = [
  { label: 'Dashboard', link: '/dashboard', icon: <BiSolidDashboard /> },
  { label: 'Products', link: '/products', icon: <BsBagFill /> },
  { label: 'Orders', link: '/orders', icon: <BiSolidTruck /> },
  { label: 'Users', link: '/users', icon: <BiSolidUser /> },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div
      className={`hidden h-screen lg:flex flex-col border-r shadow-sm duration-200 ${
        open ? 'w-72' : 'w-20'
      }`}
    >
      <div className="p-4 flex justify-between items-center">
        <img src="https://img.logoipsum.com/296.svg" />
        <button onClick={handleOpen}>
          <GiHamburgerMenu />
        </button>
      </div>

      <div className={cn('flex flex-col gap-4 p-4', !open && 'mx-auto')}>
        {menu?.map((item) => (
          <NavLink
            to={item.link}
            key={item.link}
            className="flex items-center gap-4 text-text-200 transition-all group cursor-pointer"
          >
            {({ isActive }) => (
              <>
                <span
                  className={cn(
                    'p-2 text-lg bg-background-200 rounded-md',
                    isActive && 'bg-primary-200 text-background-200',
                    !isActive && 'group-hover:bg-background-300/40'
                  )}
                >
                  {item.icon}
                </span>
                <span
                  className={cn(
                    'text-sm font-medium group-hover:font-semibold p-2',
                    !open && 'hidden',
                    isActive && 'font-bold'
                  )}
                >
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* <ul className="p-4 gap-4">
        {menu?.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-x-2 py-2 px-4 bg-background-200 mb-2 rounded-md"
          >
            {item.icon}
            <span
              className={cn(
                'text-sm text-text-200 font-medium',
                !open && 'hidden'
              )}
            >
              {item.label}
            </span>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Sidebar;
