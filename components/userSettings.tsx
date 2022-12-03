import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { updateEmail, updatePassword } from 'firebase/auth';
// import { useAuth } from '../context/AuthContext';
import { auth } from '../config/firebase';

const UserSettings = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // const { user } = useAuth();
  const user: any = auth.currentUser;

  const onSubmit = async ({ email, password }: any) => {
    try {
      await updateEmail(user, email);
      await updatePassword(user, password);
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

export default UserSettings;
