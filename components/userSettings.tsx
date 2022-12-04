import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { updatePassword } from 'firebase/auth';
// import { useAuth } from '../context/AuthContext';
import { auth } from '../config/firebase';

const UserSettings = () => {
  const { register, handleSubmit, reset } = useForm();

  // const { user } = useAuth();
  const user: any = auth.currentUser;
  console.log(user);

  // Trying to verify the current password first

  const onSubmit = async ({ password, confirmPassword }: any) => {
    try {
      if (password === confirmPassword) await updatePassword(user, password);
      reset();
      alert('credentials updated');
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  return (
    <Container className="mt-3">
      <h5>Update Profile</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <div className="m-3">
          <label className="mx-2">Current Password</label>
          <input
            {...register('oldPassword')}
            type="password"
            placeholder="Enter current password"
          />
        </div> */}
        <div className="m-3">
          <label className="mx-2">New Password</label>
          <input
            {...register('password')}
            type="password"
            placeholder="Enter new Password"
          />
        </div>
        <div className="m-3">
          <label className="mx-2">Confirm New Password</label>
          <input
            {...register('confirmPassword')}
            type="password"
            placeholder="Confirm password"
          />
        </div>
        <Button type="submit">Update</Button>
      </form>
    </Container>
  );
};

export default UserSettings;
