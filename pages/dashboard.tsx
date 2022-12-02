import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Container, Row, Col } from 'react-bootstrap';

import Profile from '../components/profile';

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

const Dashboard = () => {
  const [githubUser, setGithubUser] = useState<GithubAccount>();
  const { register, handleSubmit, reset } = useForm<UserSearchForm>();

  const onSubmit: SubmitHandler<UserSearchForm> = async ({ search }) => {
    let fetched = await fetch(`https://api.github.com/users/${search}`);
    if (fetched.ok) {
      let response = await fetched.json();
      setGithubUser(response);
      reset();
    }
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
      </Row>
    </Container>
  );
};

export default Dashboard;
