import { useState } from 'react';
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
      className={`hidden  bg-white h-screen lg:flex flex-col border-r shadow-sm duration-200 ${
        open ? 'w-72' : 'w-20'
      }`}
    >
      <div className="p-4 flex justify-between items-center">
        <img src="https://img.logoipsum.com/296.svg" />
        <button onClick={handleOpen}>
          <GiHamburgerMenu />
        </button>
      </div>

      <ul className="p-4">
        {menu?.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-x-2 py-2 px-4 bg-slate-300 mb-2 rounded-md"
          >
            {item.icon}
            <span className={`${!open && 'hidden'}`}>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
