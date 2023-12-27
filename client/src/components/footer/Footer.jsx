import Item from './Items';
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from './Menus';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
        <Item links={PRODUCTS} title="Products" />
        <Item links={RESOURCES} title="Resources" />
        <Item links={COMPANY} title="Company" />
        <Item links={SUPPORT} title="Support" />
      </div>
    </footer>
  );
};

export default Footer;
