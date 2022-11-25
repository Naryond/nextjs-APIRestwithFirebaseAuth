import React, { useState } from 'react';
import Profile from '../components/profile';
import { useForm, SubmitHandler } from 'react-hook-form';
import { info } from '../components/chartData';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Settings from '../components/settings';
import { getAuth } from 'firebase/auth';

export type Fetched = {
  login: string;
  name: string;
  location: string;
  company: string;
  blog: string;
  avatar_url: string;
};

type Form = {
  search: string;
};

type Dataset = {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor: string;
};

export type info = { labels: string; datasets: Dataset };

const userGuest = 'guest@access.com';
const userEmail: any = getAuth().currentUser?.email;
console.log(userEmail);

const Dashboard = () => {
  const [user, setUser] = useState<Fetched>();
  const [edit, setEdit] = useState<boolean>(false);
  const { register, handleSubmit, reset } = useForm<Form>();

  const onSubmit: SubmitHandler<Form> = async ({ search }) => {
    let fetched = await fetch(`https://api.github.com/users/${search}`);
    if (fetched.ok) {
      let response = await fetched.json();
      setUser(response);
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
            {user?.login && <Profile {...user} />}
          </div>
        </Col>
        {userEmail !== userGuest ? (
          <Col>
            <div className="mb-3 p-5">
              <Button onClick={editMode}>Settings</Button>
              {edit ? <Settings closePage={editMode} /> : null}
            </div>
          </Col>
        ) : null}
      </Row>
    </Container>
  );
};

export default Dashboard;
