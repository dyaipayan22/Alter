import axios from '../api/axios';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../features/auth/authSlice';

const refresh = async () => {
  const response = await axios.get('/auth/refresh', {
    withCredentials: true,
  });

  dispatch(setAccessToken(response?.data?.accessToken));
  return response?.data?.accessToken;
};
return refresh;
