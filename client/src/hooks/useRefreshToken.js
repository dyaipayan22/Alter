import { axiosPublic } from '../api/axios';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../features/auth/authSlice';

const useRefreshToken = () => {
  const dispatch = useDispatch();

  const refresh = async () => {
    const response = await axiosPublic.get('/auth/refresh', {
      withCredentials: true,
    });

    dispatch(setAccessToken(response?.data?.accessToken));
    return response?.data?.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
