import { Outlet } from 'react-router-dom';
import Sidebar from '../header/Sidebar';

const AdminLayout = () => {
  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <div className="grow container bg-bgPrimary py-4 lg:py-8 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
