"use client"
import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';
import * as S from "./styles";
import Alert from '@/components/atoms/Alert';
import Input from '@/components/molecules/Input';
import Button from '@/components/atoms/Button';

interface alertProps {
    message: string,
    typeAlert: string
}

export default function LoginTemplate() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [, setError] = useState<string>('');
  const router = useRouter();

  const [message, setMessage] = useState<alertProps>({ message: '', typeAlert: ''})

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem('token', data.token);
      router.push('/leads');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <S.Container>
        <S.Grid1 />
      <S.Grid2>
        <S.Title>Login</S.Title>
        <S.ContainerForm onSubmit={handleSubmit}>
            <S.Form>
              {(message?.message)
              && (<Alert alertType={message.typeAlert} onClose={setMessage}>{message.message}</Alert>)}
              <Input
                label='E-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                label='Password'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button
                type="submit"
                style={{backgroundColor: "#00995d"}}
                iconLeft={"/assets/icons/log-in-white.svg"}
                onClick={(e)=>{
                    handleSubmit(e)
                  // formik.handleSubmit();
                  // route.push("/dashboard");
                }}
              >
                Entrar
              </Button>
            </S.Form>
        </S.ContainerForm>
      </S.Grid2>
      </S.Container>
    // <div>
    //   <h1>Login</h1>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label>Email:</label>
    //       <input
    //         type="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label>Password:</label>
    //       <input
    //         type="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         required
    //       />
    //     </div>
    //     {error && <p style={{ color: 'red' }}>{error}</p>}
    //     <button type="submit">Login</button>
    //   </form>
    // </div>
  );
}
