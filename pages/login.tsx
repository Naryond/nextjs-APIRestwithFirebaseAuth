import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { NextRouter, useRouter } from 'next/router';

const Login = () => {
  const { user, login } = useAuth();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const router: NextRouter = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      await login(data.email, data.password);
      router.push('/dashboard');
    } catch (err) {
      console.log(err);
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
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            onChange={(e: any) => setData({ ...data, email: e.target.value })}
            value={data.email}
            required
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e: any) =>
              setData({ ...data, password: e.target.value })
            }
            value={data.password}
            required
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Button className="m-3" variant="primary" onClick={guestAccess}>
          Access as Guest
        </Button>
      </Form>
    </div>
  );
};

export default Login;
