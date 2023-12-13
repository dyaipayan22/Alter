import { Outlet } from 'react-router-dom';
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';

const Layout = () => {
  return (
    <div className="w-full min-h-screen relative flex flex-col">
      <Navbar />
      <div className="grow py-4 lg:py-8 bg-white mt-2">
        <div className="container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
