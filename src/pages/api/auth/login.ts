import type { NextApiRequest, NextApiResponse } from 'next';

interface LoginRequest extends NextApiRequest {
  body: {
    email: string;
    password: string;
  };
}

export default function handler(req: LoginRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    const mockUser = {
      email: 'admin@example.com',
      password: 'password123',
    };

    
    if (email === mockUser.email && password === mockUser.password) {
      const token = 'mock-token-123456';

      return res.status(200).json({ token });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
