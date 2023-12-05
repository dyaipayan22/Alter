import React from 'react';
import useRefreshToken from '../hooks/useRefreshToken';

const Home = () => {
  const refresh = useRefreshToken();
  return (
    <div>
      Home
      <button onClick={() => refresh()}>Refresh</button>
    </div>
  );
};

export default Home;
