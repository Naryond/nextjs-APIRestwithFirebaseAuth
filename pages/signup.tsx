import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const { user, signup } = useAuth();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleSignup = async (e: any) => {
    e.preventDefault();
    try {
      await signup(data.email, data.password);
    } catch (err) {
      console.log(err);
    }
    console.log(data);
  };

  return (
    <div style={{ width: '40%', margin: 'auto' }}>
      <h1 className="text-center my-3">Signup</h1>
      <Form onSubmit={handleSignup}>
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
          Signup
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
