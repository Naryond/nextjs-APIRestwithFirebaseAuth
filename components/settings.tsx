import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Container, Form, Button } from 'react-bootstrap';

const Settings = () => {
  const { user, updateEmailFunc, updatePasswordFunc } = useAuth();
  const [data, setData] = useState({
    email: '',
    password: '',
    loading: false,
  });

  const handleEmail = (e: any) => {
    setData({ ...data, email: e.target.value });
  };

  const handlePassword = (e: any) => {
    setData({ ...data, password: e.target.value });
  };

  const handleSettings = async (e: any) => {
    e.preventDefault();
    // try {
    //   await updateEmailFunc(data.email);
    // } catch (err) {
    //   console.log(err);
    // }
    // try {
    //   await updatePasswordFunc(data.password);
    // } catch (err) {
    //   console.log(err);
    // }
    const promises = [];
    setData({ ...data, loading: true });
    const newEmail = data.email;
    const newPassword = data.password;
    promises.push(updateEmailFunc(user, newEmail));
    promises.push(updatePasswordFunc(user, newPassword));
    return Promise.all(promises)
      .then(() => setData({ ...data, loading: false }))
      .catch();
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
