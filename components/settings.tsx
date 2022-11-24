import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { getAuth, updateEmail, updatePassword } from 'firebase/auth';

const Settings = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    loading: false,
  });

  const auth = getAuth();

  const utente: any = auth.currentUser;

  const handleEmail = (e: any) => {
    setData({ ...data, email: e.target.value });
  };

  const handlePassword = (e: any) => {
    setData({ ...data, password: e.target.value });
  };

  const handleSettings = async (e: any) => {
    e.preventDefault();
    try {
      await updateEmail(utente, data.email);
      await updatePassword(utente, data.password);
    } catch (err) {
      console.log(err);
    } finally {
      alert('Credentials updated');
    }
  };

  return (
    <Container className="mt-3">
      <h5>Update Profile</h5>
      <Form onSubmit={handleSettings}>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            onChange={handleEmail}
            value={data.email}
            type="email"
            placeholder="Enter new Email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handlePassword}
            value={data.password}
            type="password"
            placeholder="Enter new Password"
            required
          />
        </Form.Group>
        <Button disabled={data.loading} type="submit">
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default Settings;
