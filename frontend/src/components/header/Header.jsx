import { Link } from 'react-router-dom';

import { navItems } from '../../utils/constants';

const Header = () => {
  return (
    <div className="bg-indigo-500">
      <div>
        {navItems?.map((item) => (
          <Link to={item.link} key={item.label}>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
