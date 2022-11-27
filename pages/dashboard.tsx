import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Container, Row, Col, Button } from 'react-bootstrap';

import Profile from '../components/profile';
import Settings from '../components/settings';
import { useAuth } from '../context/AuthContext';

export type GithubAccount = {
  login: string;
  name: string;
  location: string;
  company: string;
  blog: string;
  avatar_url: string;
};

type UserSearchForm = {
  search: string;
};

const userGuestId: string = '50zJsjxQPKbQHGGLV5KmxVADPU42';

const Dashboard = () => {
  const { user } = useAuth();
  const [githubUser, setGithubUser] = useState<GithubAccount>();
  const [edit, setEdit] = useState<boolean>(false);
  const { register, handleSubmit, reset } = useForm<UserSearchForm>();

  const onSubmit: SubmitHandler<UserSearchForm> = async ({ search }) => {
    let fetched = await fetch(`https://api.github.com/users/${search}`);
    if (fetched.ok) {
      let response = await fetched.json();
      setGithubUser(response);
      reset();
    }
  };

  const editMode = (): void => {
    setEdit(!edit);
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="mb-3 p-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Search User"
                {...register('search')}
              />
              <button type="submit">Search</button>
            </form>
            <br />
            {githubUser?.login && <Profile {...githubUser} />}
          </div>
        </Col>
        <Col>
          {user.uid !== userGuestId ? (
            <div className="mb-3 p-5">
              <Button onClick={editMode}>Settings</Button>
              {edit ? <Settings closePage={editMode} /> : null}
            </div>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
