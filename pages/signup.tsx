import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Container } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { NextRouter, useRouter } from 'next/router';

type UserSignupForm = {
  email: string;
  password: string;
};

const Signup = () => {
  const { signup } = useAuth();
  const { register, handleSubmit, reset } = useForm<UserSignupForm>();
  const router: NextRouter = useRouter();

  const onSubmit: SubmitHandler<UserSignupForm> = async ({
    email,
    password,
  }) => {
    try {
      await signup(email, password);
      router.push('/dashboard');
      reset();
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  return (
    <div style={{ width: '40%', margin: 'auto' }}>
      <h1 className="text-center my-3">Signup</h1>
      <Container className="mb-3 p-5">
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
          <Button className="m-3" variant="primary" type="submit">
            Signup
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Signup;
