import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../features/auth/authSlice';

const RequireAuth = () => {
  const user = useSelector((state) => state.auth.userInfo);
  console.log(user);
  const location = useLocation();

  return user?.accessToken ? (
    <>
      {console.log(user.accessToken)}
      <Outlet />
    </>
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} replace />
  );
};

export default RequireAuth;
