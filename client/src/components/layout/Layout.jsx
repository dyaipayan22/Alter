import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';

const Layout = () => {
  return (
    <div className="w-full min-h-screen relative flex flex-col">
      {/* <Header /> */}
      <Navbar />
      <div className="grow py-4 lg:py-8">
        <div className="container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
