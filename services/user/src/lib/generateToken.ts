import jwt from 'jsonwebtoken';

export async function generateToken(userId: string) {
  return jwt.sign(
    {
      id: userId,
    },
    process.env.TOKEN_SECRET!,
    { expiresIn: '1d' }
  );
}
