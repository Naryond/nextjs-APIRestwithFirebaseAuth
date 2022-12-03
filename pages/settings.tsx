import React from 'react';
import { Container } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import UserSettings from '../components/userSettings';

const userGuestId: string = '50zJsjxQPKbQHGGLV5KmxVADPU42';

const Settings = () => {
  const { user } = useAuth();
  return (
    <Container className="my-5">
      {user.uid !== userGuestId ? (
        <UserSettings />
      ) : (
        <h3>No settings available on guest access</h3>
      )}
    </Container>
  );
};

export default Settings;
