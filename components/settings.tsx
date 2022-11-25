import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { getAuth, updateEmail, updatePassword } from 'firebase/auth';

const Settings = (closePage: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const auth = getAuth();

  const currentUser: any = auth.currentUser;

  const onSubmit = async ({ email, password }: any) => {
    try {
      await updateEmail(currentUser, email);
      await updatePassword(currentUser, password);
      reset();
    } catch (err) {
      console.log(err);
    } finally {
      alert('Credentials updated');
    }
  };

  return (
    <Container className="mt-3">
      <h5>Update Profile</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="m-3">
          <label>Email Address</label>
          <input
            {...register('email')}
            type="email"
            placeholder="Enter new Email"
          />
        </div>
        <div className="m-3">
          <label>Password</label>
          <input
            {...register('password')}
            type="password"
            placeholder="Enter new Password"
          />
        </div>
        <Button type="submit">Update</Button>
      </form>
    </Container>
  );
};

export default Settings;
