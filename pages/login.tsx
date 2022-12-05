import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Container } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { NextRouter, useRouter } from 'next/router';

type UserLoginForm = {
  email: string;
  password: string;
};

const Login = () => {
  const { login } = useAuth();
  const { register, handleSubmit, reset } = useForm<UserLoginForm>();
  const router: NextRouter = useRouter();

  const onSubmit: SubmitHandler<UserLoginForm> = async ({
    email,
    password,
  }) => {
    try {
      await login(email, password);
      router.push('/dashboard');
      reset();
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  const guestAccess = async () => {
    try {
      await login('guest@access.com', 'guestaccess');
      router.push('/dashboard');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ width: '40%', margin: 'auto' }}>
      <h1 className="text-center my-3">Login</h1>
      <Container className="m-3 p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-3">
            <input
              type="email"
              required
              placeholder="Enter Email"
              {...register('email')}
            />
          </div>
          <div className="my-3">
            <input
              type="password"
              required
              placeholder="Enter Password"
              {...register('password')}
            />
          </div>
          <Button className="mx-2" variant="primary" type="submit">
            Login
          </Button>
          <Button variant="primary" onClick={guestAccess}>
            Access as Guest
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
