
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json(); // Extrai os dados da requisição

  const mockUser = {
    email: 'admin@example.com',
    password: 'password123',
  };

  // Validação do usuário
  if (email === mockUser.email && password === mockUser.password) {
    const token = 'mock-token-123456';
    return NextResponse.json({ token }, { status: 200 });
  } else {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }
}
