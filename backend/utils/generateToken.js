import jwt from 'jsonwebtoken';

export const generateAccessToken = (id, role) => {
  return jwt.sign(
    {
      UserInfo: {
        id: id,
        role: role,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: '5d',
    }
  );
};

export const generateRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: '7d',
  });
};
