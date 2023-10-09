import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const UserLayout = () => {
  return (
    <div className="w-full min-h-screen relative flex flex-col">
      <Header />
      <div className="grow bg-orange-200">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
