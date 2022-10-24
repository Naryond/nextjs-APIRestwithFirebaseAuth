import React from 'react';
import Card from 'react-bootstrap/Card';
import Contributions from './contributions';
import { Fetched } from '../pages/dashboard';

const Profile = ({ name, location, company, blog, avatar_url }: Fetched) => {
  return (
    <>
      <Card>
        <Card.Header>
          <div>Name: {name}</div>
          {location ? <div>Location: {location}</div> : null}
          {company ? <div>Company: {company}</div> : null}
          {blog ? <div>Web Page: {blog}</div> : null}
          <Card.Body>
            <picture>
              <img style={{ borderRadius: '20%' }} src={avatar_url} alt="" />
            </picture>
          </Card.Body>
        </Card.Header>
      </Card>
      <Card>
        <Contributions />
      </Card>
    </>
  );
};

export default Profile;
